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
  public registerForm: FormGroup;
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private firebase: FirebaseApp,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.authStep = 'chooseProvider';

    this.loginForm = this.fb.group({
      email: new FormControl('artem', [Validators.required, Validators.email]),
      password: new FormControl(null,
        [Validators.required, Validators.minLength(6), Validators.maxLength(50)])
    });

    this.registerForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,
        [Validators.required, Validators.minLength(6), Validators.maxLength(50)])
    });
  }

  public changeStep(step) {
    this.authStep = step;
  }

  public login() {
    if (this.loginForm.valid) {
      this.authService.loginWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value);
    }
  }

  public register() {
    if (this.registerForm.valid) {
      this.authService.signUpWithEmailAndPassword(this.registerForm.get('email').value, this.registerForm.get('password').value);
    }
  }

  public checkEmail() {
    if (this.emailToCheck.valid) {
      this.firebase.auth().fetchSignInMethodsForEmail(this.emailToCheck.value).then(result => {
        if (result.length) {
          this.authStep = 'login';
        } else {
          this.authStep = 'register';
        }
      }, (error) => {
      });
    }
  }

}
