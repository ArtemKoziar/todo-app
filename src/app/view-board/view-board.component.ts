import { Component, OnInit } from '@angular/core';
import { ViewBoardService } from './view-board.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../shared/models/task-model';

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
  public todayListControl: string;
  public tomorrowListControl: string;
  public upcomingListControl: string;
  public somedayListControl: string;

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
          task.estimate = this.expirationToEstimate(task.expiration);
          this.tasks[task.estimate.toLowerCase()].push(task);
        }
      });
    });
  }

  public addTask(estimate: string, control: string) {
    const expiration = this.estimateToExpiration(estimate);
    const task: Task = {
      taskName: control,
      estimate: estimate,
      expiration: expiration,
      done: false,
      id: this.firestore.createId()
    };
    this.service.createTask(task, this.listTitle)
  }

  private estimateToExpiration(estimate) {
    const currentTime = new Date().getTime();
    const day = {
      today: currentTime + 86400000,
      tomorrow: currentTime + (86400000 * 2),
      upcoming: currentTime + (86400000 * 8),
      someday: -1
    };
    return day[estimate];
  }

  private expirationToEstimate(expiration) {
    const currentTime = new Date().getTime(),
          today = currentTime + 86400000,
          tomorrow = currentTime + (86400000 * 2);
    let estimate;
    if (expiration > tomorrow) {
      estimate = 'upcoming';
    }
    if ( expiration > today && expiration < tomorrow ) {
      estimate = 'tomorrow';
    }
    if (expiration < today && expiration > 0) {
      estimate = 'today';
    }
    if (expiration <= 0) {
      estimate = 'someday';
    }
    return estimate;
  }

  public removeTask(board, task) {
    // this.taskBoards[board].tasks.splice(task, 1);
  }

  public markTask(task) {
    task.done = !task.done;
    console.log(task);
    this.service.changeTask(task, this.listTitle);
  }
}
