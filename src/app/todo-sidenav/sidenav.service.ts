import { Injectable } from '@angular/core';
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

  public createNewList(list) {
    return this.firestore.collection(`users/${this.authService.getUserId()}/lists`).doc(list).set({listName: list}).then(result => {
      console.log('success ', result);
    }).catch(err => {
      console.log('error ', err);
    });
  }

  public deleteLists(lists) {
    for (const list in lists) {
      if (list) {
        this.firestore.collection('users').doc(this.authService.getUserId()).collection('lists').doc(list).delete();
      }
    }
  }

}
