import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from '../../shared/models/task-model';
import { ViewBoardService } from '../view-board.service';

@Component({
  selector: 'app-day-container',
  templateUrl: './day-container.component.html',
  styleUrls: ['./day-container.component.scss']
})
export class DayContainerComponent implements OnInit {
  @Input() data: KeyValue<string, Task[]>;

  public taskInput: string;
  private _listTitle: string;
  constructor(private service: ViewBoardService,
              private firestore: AngularFirestore,
              private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this._listTitle = params.list;
    });
  }

  ngOnInit(): void {
  }

  public removeTask(id: string, list: string): void {
    this.service.removeTask(id, list);
  }

  public markTask(task): void {
    task.done = !task.done;
    this.service.changeTask(task);
  }

  public addTask(estimate: string): void {
    console.log(estimate);
    const expiration = this.service.estimateToExpiration(estimate);
    const task: Task = {
      taskName: this.taskInput,
      estimate: estimate,
      expiration: expiration,
      done: false,
      id: this.firestore.createId(),
      list: this._listTitle
    };
    this.service.createTask(task, this._listTitle);
    this.taskInput = null;
  }
}
