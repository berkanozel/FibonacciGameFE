import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {GridService} from "../../../services/grid.service";
import {PlayGround} from "../../../models/PlayGround";
import {delay, switchMap, take} from "rxjs";

@Component({
  selector: 'app-grid-playground',
  templateUrl: './grid-playground.component.html',
  styleUrl: './grid-playground.component.css'
})
export class GridPlaygroundComponent implements OnInit{

  constructor(private gridService: GridService, private modalService: NgbModal) { }

  playground: PlayGround = new PlayGround();
  pressedCoordinationX: number = -1;
  pressedCoordinationY: number = -1;


  @Output() returnButtonEmitter: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.gridService.getPlayGround().subscribe(res => {
      this.playground = res;
    });
  }

  returnSettings({content}: { content: any }) {
      this.modalService.open(content, { size: 'lg', backdrop: 'static', centered: true});
  }

  resetGame({content}: { content: any }) {
    this.modalService.open(content, { size: 'lg', backdrop: 'static', centered: true});
  }

  confirmToReturn() {
    this.modalService.dismissAll();
    this.returnButtonEmitter.emit(false);
  }

  closePopUp() {
    this.modalService.dismissAll();
  }

  pressed(row: number, column: number) {
    this.gridService.givePressedGridCoordination(row, column).pipe(
      switchMap(() => this.gridService.getPlayGround()),
      take(1)
    ).subscribe(res => {
      this.playground = res;
      this.pressedCoordinationX = row;
      this.pressedCoordinationY = column
      if (this.playground.isThereAnyFibonacci) {
        this.gridService.resetFibonacciBoxes().pipe(
          delay(1000)
        ).subscribe(res => {
          this.playground = res;
        });
      }
    });
  }

  confirmReset() {
    this.gridService.giveGridSizeInfo(this.playground.boxes.length).subscribe( () => {
      this.gridService.getPlayGround().subscribe( res => {
        this.playground = res;
        this.modalService.dismissAll();
        this.pressedCoordinationX = -1;
        this.pressedCoordinationY = -1;
      })
    });
  }

  isBlinkYellow(x: number, y: number): boolean {
    return this.pressedCoordinationX === x || this.pressedCoordinationY === y;
  }
}
