import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'firebase';
import { ViewBoardService } from './view-board.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../shared/models/task-model';
import { KeyValue } from '@angular/common';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent implements OnInit, OnDestroy {
  // todo THIS SHOULD BE A MAIN COMPONENT, AND ALSO IT'S BETTER TO RENAME IT
  private ngUnsubscribe: Subject<any> = new Subject();
  private subscription: Subscription;
  private newList: boolean;
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

    console.log('constructor ViewBoardComponent');

    this.route.params.subscribe(param => {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }

      this.listTitle = param.list;
      console.log('constructor');
      this.newList = true;
      // todo refactor this shit
      this.authService.getUserId().then(({uid}) => {
        this.subscription = this.service.getTasks(this.listTitle, uid).valueChanges().subscribe( tasks => {
          console.log('tasks', this.listTitle, tasks);
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
      });

    });
  }

  ngOnInit() {

  }

  public orderByDay(a: KeyValue<string, Task[]>, b: KeyValue<string, Task[]>): number {
    const days = ['today', 'tomorrow', 'upcoming', 'someday'];
    return days.indexOf(a.key) > days.indexOf(b.key) ? 1 : (days.indexOf(b.key) > days.indexOf(a.key) ? 1 : 0);
  }

  ngOnDestroy() {
    console.log('component destroys');
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
