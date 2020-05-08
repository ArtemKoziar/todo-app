import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TodoSidenavComponent } from '../todo-sidenav/todo-sidenav.component';
import { TodoToolbarComponent } from '../todo-toolbar/todo-toolbar.component';
import { ViewBoardModule } from '../view-board/view-board.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ViewBoardModule
  ],
  declarations: [
    MainComponent,
    TodoToolbarComponent,
    TodoSidenavComponent
  ],
  providers: [
  ]
})
export class MainModule {
}
