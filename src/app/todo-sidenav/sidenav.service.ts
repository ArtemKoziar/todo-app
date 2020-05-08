import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  constructor(private authService: AuthService,
              private firestore: AngularFirestore
  ) {
  }

  public createNewList(list): Promise<any> {
    return this.authService.getUserId().then((user: User) => {
      return this.firestore.collection(`users/${user.uid}/lists`).doc(list).set({listName: list}).then(result => {
        console.log('success ', result);
      }).catch(err => {
        console.log('error ', err);
      });
    });
  }

  public deleteLists(lists) {
    for (const list in lists) {
      if (lists.hasOwnProperty(list)) {
        this.authService.getUserId().then((user: User) => {
          this.firestore.collection('users').doc(user.uid).collection('lists').doc(list).delete();
        });
      }
    }
  }

}
