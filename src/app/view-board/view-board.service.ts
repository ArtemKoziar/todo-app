import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../shared/models/task-model';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Resolver } from '@angular/core/testing/src/resolvers';
import { AuthService } from '../shared/services/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class ViewBoardService {
  constructor(private firestore: AngularFirestore,
              private authService: AuthService) {
  }

  public getTasks(list): AngularFirestoreCollection<any> {
    return this.firestore.collection(`users/${this.authService.getUserId()}/lists/${list}/tasks`);
  }

  public createTask(task, list) {
    return this.firestore.collection(`users/${this.authService.getUserId()}/lists/${list}/tasks`).doc(task.id).set(task).then(res => {
      console.log(res);
      return res;
    }).catch(err => {
      console.log(err);
    });
  }

  public changeTask(task, list) {
    this.firestore.collection(`users/${this.authService.getUserId()}/lists/${list}/tasks`).doc(task.id).set(task).then(res => {
      console.log('res', res);
    }).catch(err => {
      console.log('err', err);
    });
  }
}
//
// @Injectable()
// export class ListResolver implements Resolve<boolean> {
//   constructor(private authService: AuthService,
//               private firestore: AngularFirestore) {
//   }
//
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     return undefined;
//   }
//
// }
