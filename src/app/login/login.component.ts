import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseApp } from '@angular/fire';
import * as fire from 'firebase/app';
import { EmailValidatorDirective } from '../shared/directives/email-validator.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public emailInput: string;
  public authStep: string;
  public emailToCheck = new FormControl(null, Validators.email);
  public signUpForm: FormGroup;
  public signInForm: FormGroup;

  constructor(private fb: FormBuilder,
              private firebase: FirebaseApp) {
  }

  ngOnInit() {
    this.authStep = 'signIn';

    this.signUpForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,
        [Validators.required, Validators.minLength(6), Validators.maxLength(50)])
    });

    this.signInForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      password: new FormControl(null,
        [Validators.required, Validators.minLength(6), Validators.maxLength(50)])
    });
  }

  public changeStep(step) {
    this.authStep = step;
  }

  public socialNetworkSignin(network) {
    const provider = network === 'google' ? new fire.auth.GoogleAuthProvider() : new fire.auth.FacebookAuthProvider();
    this.firebase.auth().signInWithPopup(provider);
  }

  public signIn() {

  }

  public signUp() {

  }

  public checkEmail() {
    if (this.emailToCheck.valid) {
      this.firebase.auth().fetchSignInMethodsForEmail(this.emailToCheck.value).then(result => {
        if (result.length) {
          this.authStep = 'signUp';
        } else {
          this.authStep = 'signIn';
        }
      }, (error) => {
      });
    }
  }

}
