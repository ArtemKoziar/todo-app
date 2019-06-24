import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../shared/models/task-model';

@Injectable()
export class ViewBoardService {
  public getTasks(): Observable<Task[]> {
    const tasks = [
      {
        name: 'today task',
        expiration: 1558648800,
        estimate: 'today',
        estimated: true,
        status: false
      },
      {
        name: 'Tomorrow task',
        estimate: 'tomorrow',
        expiration: 1558699200,
        estimated: true,
        status: false
      },
      {
        name: 'on this week',
        estimate: 'upcoming',
        expiration: 1558872000,
        estimated: true,
        status: false
      },
      {
        name: 'without estimate',
        estimate: 'someday',
        // expiration: 1558872000,
        estimated: false,
        status: false
      }
    ];
    return of(tasks);
  }
}
