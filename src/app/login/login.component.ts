import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseApp } from '@angular/fire';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public passwordVisible = false;
  public authStep: string;
  public emailToCheck = new FormControl(null, Validators.email);
  public signUpForm: FormGroup;
  public signInForm: FormGroup;

  constructor(private fb: FormBuilder,
              private firebase: FirebaseApp,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.authStep = 'chooseProvider';

    this.signInForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,
        [Validators.required, Validators.minLength(6), Validators.maxLength(50)])
    });

    this.signUpForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,
        [Validators.required, Validators.minLength(6), Validators.maxLength(50)])
    });
  }

  public changeStep(step) {
    this.authStep = step;
  }

  public login() {
    if (this.signInForm.valid) {
      this.authService.loginWithEmailAndPassword(this.signInForm.get('email').value, this.signInForm.get('password').value);
    }
  }

  public signUp() {
    if (this.signUpForm.valid) {
      this.authService.signUpWithEmailAndPassword(this.signUpForm.get('email').value, this.signUpForm.get('password').value);
    }
  }

  public checkEmail() {
    if (this.emailToCheck.valid) {
      this.firebase.auth().fetchSignInMethodsForEmail(this.emailToCheck.value).then(result => {
        if (result.length) {
          this.authStep = 'signIn';
        } else {
          this.authStep = 'signUp';
        }
      }, (error) => {
      });
    }
  }

}
