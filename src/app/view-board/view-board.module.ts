import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DayContainerComponent } from './day-container/day-container.component';
import { ViewBoardComponent } from './view-board.component';
import { ViewBoardService } from './view-board.service';



@NgModule({
  declarations: [
    DayContainerComponent,
    ViewBoardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ViewBoardService
  ]
})
export class ViewBoardModule { }
