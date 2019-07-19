import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Observable, from } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private firebase: FirebaseApp) { }

  public signInWithSocialNetwork(provider) {
    return from<Promise<any>> (this.firebase.auth().signInWithPopup(provider));
  }


  public isAuthenticated() {
    return this.firebase.auth();
  }
}
