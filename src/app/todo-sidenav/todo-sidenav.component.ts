import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-sidenav',
  templateUrl: './todo-sidenav.component.html',
  styleUrls: ['./todo-sidenav.component.css']
})
export class TodoSidenavComponent implements OnInit {
public lists = ['First', 'Second', 'Third'];
  constructor() { }

  ngOnInit() {
  }

}
