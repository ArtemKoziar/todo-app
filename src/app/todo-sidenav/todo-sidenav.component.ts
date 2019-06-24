import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-sidenav',
  templateUrl: './todo-sidenav.component.html',
  styleUrls: ['./todo-sidenav.component.scss']
})
export class TodoSidenavComponent implements OnInit {
  public lists = ['First', 'Second', 'Third'];
  public editLists = false;

  constructor() {
  }

  ngOnInit() {
  }

}
