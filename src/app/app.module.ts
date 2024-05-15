import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GridMakerComponent} from "./game/components/grid-maker/grid-maker.component";
import {HttpClientModule} from "@angular/common/http";
import {GridService} from "./game/services/grid.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { GridPlaygroundComponent } from './game/components/grid-playground/grid-playground/grid-playground.component';

@NgModule({
  declarations: [
    AppComponent,
    GridPlaygroundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GridMakerComponent,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
    ],
  providers: [GridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
