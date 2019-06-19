import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/models';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
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

  constructor() {

    this.tempTasks = [
      {
        name: 'today task',
        expiration: 1558648800,
        estimate: 'today',
        estimated: true
      },
      {
        name: 'Tomorrow task',
        estimate: 'tomorrow',
        expiration: 1558699200,
        estimated: true
      },
      {
        name: 'on this week',
        estimate: 'upcoming',
        expiration: 1558872000,
        estimated: true
      },
      {
        name: 'without estimate',
        estimate: 'someday',
        // expiration: 1558872000,
        estimated: false
      }
    ];
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
    this.tempTasks.map((task) => {
      this.taskBoards.map( board => {
        if (board.name.toLowerCase() === task.estimate ) {
          board.tasks.push(task);
        }
      });
    });
  }

  public onEnter(event, index) {
    if (event.key === 'Enter' && event.keyCode === 13) {
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
