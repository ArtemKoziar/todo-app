import { Component, OnInit } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'todo-sidenav',
  templateUrl: './todo-sidenav.component.html',
  styleUrls: ['./todo-sidenav.component.scss']
})
export class TodoSidenavComponent implements OnInit {
  public lists = ['First', 'Second', 'Third'];
  public editLists = false;
  public newList: string;

  constructor(private service: SidenavService) {
  }

  ngOnInit() {
  }

  public createList() {
    this.service.createNewList(this.newList).subscribe( result => {
      this.lists.push(result);
      this.newList = '';
    });
  }
}
