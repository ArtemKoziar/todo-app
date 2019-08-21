import { Component, OnInit } from '@angular/core';
import { ViewBoardService } from './view-board.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../shared/models/task-model';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent implements OnInit {
  public listTitle: string;
  public tasks = {
    today: [],
    tomorrow: [],
    upcoming: [],
    someday: []
  };
  public boardControls = {
    today: null,
    tomorrow: null,
    upcoming: null,
    someday: null
  };

  constructor(
    private service: ViewBoardService,
    private authService: AuthService,
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(param => {
      this.listTitle = param.list;
    });
  }

  ngOnInit() {
    this.service.getTasks(this.listTitle).valueChanges().subscribe(tasks => {
      this.tasks.today = [];
      this.tasks.tomorrow = [];
      this.tasks.upcoming = [];
      this.tasks.someday = [];
      tasks.forEach( (task: Task) => {
        if (task) {
          task.estimate = this.service.expirationToEstimate(task.expiration);
          this.tasks[task.estimate.toLowerCase()].push(task);
        }
      });
    });
  }

  public addTask(estimate: string): void {
    const expiration = this.service.estimateToExpiration(estimate);
    const task: Task = {
      taskName: this.boardControls[estimate],
      estimate: estimate,
      expiration: expiration,
      done: false,
      id: this.firestore.createId()
    };
    this.service.createTask(task, this.listTitle);
    this.boardControls[estimate] = null;
  }

  public removeTask(id: string): void {
    this.service.removeTask(id, this.listTitle);
  }

  public markTask(task): void {
    task.done = !task.done;
    this.service.changeTask(task, this.listTitle);
  }

  public orderByDay(a: KeyValue<string, Task[]>, b: KeyValue<string, Task[]>): number {
    const days = ['today', 'tomorrow', 'upcoming', 'someday'];
    return days.indexOf(a.key) > days.indexOf(b.key) ? 1 : (days.indexOf(b.key) > days.indexOf(a.key) ? 1 : 0);
  }
}
