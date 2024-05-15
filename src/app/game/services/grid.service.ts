import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GridService {

  private apiServerUrl = environment.apiBaseUrl + '/game';

  constructor(private http: HttpClient) {
  }

  public giveGridSizeInfo(gridSize: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/give-grid-size-info/${gridSize}`);
  }

  public getPlayGround(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/get-play-ground`);
  }

  public givePressedGridCoordination(row: number, column: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/set-pressed-grid-coordination/${row}/${column}`);
  }

    public resetFibonacciBoxes(): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/reset-fibonacci-boxes`);
    }
}
