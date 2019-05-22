import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit {
  public pageTitle = 'All tasks';
  public taskBoards = [];
  public boardControls = [
    { name: null },
    { name: null },
    { name: null },
    { name: null },
  ];
  constructor() {

    this.taskBoards = [
      {
        name: 'Today',
        tasks: [
          {
            name: 'Some task'
          },
          {
            name: 'Another task'
          }
        ]
      },
      {
        name: 'Tomorrow',
        tasks: [
          {
            name: 'Some task'
          },
          {
            name: 'Another task'
          }
        ]
      },
      {
        name: 'Upcoming',
        tasks: [
          {
            name: 'Some task'
          },
          {
            name: 'Another task'
          }
        ]
      },
      {
        name: 'Someday',
        tasks: [
          {
            name: 'Some task'
          },
          {
            name: 'Another task'
          }
        ]
      }
    ];
  }

  ngOnInit() {
  }

  public addTask(board) {
    console.log(this.boardControls);

    this.taskBoards[board].tasks.push(this.boardControls[board]);
  }
}
