import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {GridService} from "../../services/grid.service";
import {ToastrService} from "ngx-toastr";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-grid-maker',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './grid-maker.component.html',
  styleUrl: './grid-maker.component.css'
})
export class GridMakerComponent {
  constructor(private gridService: GridService, private toasterService: ToastrService, private modalService: NgbModal) { }

  @Output() startButtonEmitter: EventEmitter<any> = new EventEmitter<any>();

  numberOfGridSize: number = 0;

  openStartGameModal({content}: { content: any }) {
    if (this.numberOfGridSize > 50) {
      this.toasterService.error("You cannot enter values greater than 50 in the grid size field!")
    } else if (this.numberOfGridSize < 5) {
      this.toasterService.error("You cannot enter values less than 5 in the grid size field!")
    } else {
      this.modalService.open(content, { size: 'lg', backdrop: 'static', centered: true});
    }
  }

  closePopUp() {
      this.modalService.dismissAll();
  }

  startGame() {
    this.gridService.giveGridSizeInfo(this.numberOfGridSize).subscribe( ()=> {
      this.startButtonEmitter.emit(true);
      this.modalService.dismissAll();
    });
  }
}
