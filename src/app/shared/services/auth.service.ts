import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private firebase: FirebaseApp,
              private router: Router) {
  }

  public signUpWithEmailAndPassword(email, password) {
    this.firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(result => {
        this.router.navigate(['/tasks']);
      }).catch(err => {
      console.log(err);
    });
  }

  public loginWithEmailAndPassword(email, password) {
    this.firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/tasks']);
      }).catch(err => {
      console.log(err);
    });
  }

  public logout() {
    this.firebase.auth().signOut().then(() => {
      this.router.navigate(['/login']);
    }).catch(err => {
      console.log(err);
    });
  }

}
