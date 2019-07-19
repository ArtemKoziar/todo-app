import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'todo-toolbar',
  templateUrl: './todo-toolbar.component.html',
  styleUrls: ['./todo-toolbar.component.scss']
})
export class TodoToolbarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public onLogin() {
    this.router.navigate(['/login']);
  }

  public onLogout() {
    this.router.navigate(['']);
  }

}
