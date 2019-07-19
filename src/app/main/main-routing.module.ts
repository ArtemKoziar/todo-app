import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBoardComponent } from '../view-board/view-board.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
      { path: 'view', component: ViewBoardComponent}
    ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
