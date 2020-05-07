import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { AuthService } from '../shared/services/auth.service';

@Injectable()
export class ViewBoardService {
  constructor(private firestore: AngularFirestore,
              private authService: AuthService) {
  }

  public getTasks(list): AngularFirestoreCollection<any> | AngularFirestoreCollectionGroup<any> {
    console.log('get tasks');
    if (list !== 'All tasks') {
      console.log('collection');
      return this.firestore.collection(`users/${this.authService.getUserId()}/lists/${list}/tasks`);
    }
    console.log('collection group');
    return this.firestore.collectionGroup('tasks');
  }

  public createTask(task, list) {
    return this.firestore.collection(`users/${this.authService.getUserId()}/lists/${list}/tasks`).doc(task.id).set(task).then(res => {
      // console.log(res);
      return res;
    }).catch(err => {
      console.log(err);
    });
  }

  public removeTask(id: string, list: string): void {
    this.firestore.collection(`users/${this.authService.getUserId()}/lists/${list}/tasks`).doc(id).delete().then(res => {
      console.log(res);
      return res;
    }).catch(err => {
      console.log(err);
    });
  }

  public changeTask(task) {
    this.firestore.collection(`users/${this.authService.getUserId()}/lists/${task.list}/tasks`).doc(task.id).set(task).then(res => {
      // console.log('res', res);
    }).catch(err => {
      console.log('err', err);
    });
  }

  public expirationToEstimate(expiration: number): string {
    const currentTime = new Date().getTime(),
      today = currentTime + 86400000,
      tomorrow = currentTime + (86400000 * 2);
    let estimate;
    if (expiration > tomorrow) {
      estimate = 'upcoming';
    }
    if (expiration > today && expiration < tomorrow) {
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

  public estimateToExpiration(estimate: string): number {
    const currentTime = new Date().getTime();
    const day = {
      today: currentTime + 86400000,
      tomorrow: currentTime + (86400000 * 2),
      upcoming: currentTime + (86400000 * 8),
      someday: -1
    };
    return day[estimate];
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
