import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBoardComponent } from '../view-board/view-board.component';
import { TodoToolbarComponent } from '../todo-toolbar/todo-toolbar.component';
import { TodoSidenavComponent } from '../todo-sidenav/todo-sidenav.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ],
  declarations: [
    MainComponent,
    ViewBoardComponent,
    TodoToolbarComponent,
    TodoSidenavComponent,
  ],
  providers: [

  ]
})
export class MainModule { }
