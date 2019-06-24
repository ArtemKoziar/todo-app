import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/task-model';
import { ViewBoardService } from './view-board.service';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent implements OnInit {
  public pageTitle = 'All Tasks';
  public taskBoards = [];
  public tempTasks: Task[];
  public boardControls = [
    {name: null},
    {name: null},
    {name: null},
    {name: null}
  ];

  constructor(
    private service: ViewBoardService
  ) {
    this.taskBoards = [
      {
        name: 'Today',
        tasks: []
      },
      {
        name: 'Tomorrow',
        tasks: []
      },
      {
        name: 'Upcoming',
        tasks: []
      },
      {
        name: 'Someday',
        tasks: []
      }
    ];
  }

  ngOnInit() {
    this.service.getTasks().subscribe(tasks => {
      tasks.map((task) => {
        this.taskBoards.map(board => {
          if (board.name.toLowerCase() === task.estimate) {
            board.tasks.push(task);
          }
        });
      });
    });
  }

  public onEnter(event, index) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      this.addTask(index);
    }
  }

  public addTask(board) {
    const task = this.boardControls[board];
    this.taskBoards[board].tasks.push(task);
  }

  public removeTask(board, task) {
    console.log(board, task, this.boardControls, this.taskBoards);
    // this.taskBoards[board].tasks.splice(task, 1);
  }
}
