import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FirebaseApp } from '@angular/fire';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let template: HTMLElement;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    const firebaseAppSpy = jasmine.createSpyObj('FirebaseApp', ['auth']);
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['loginWithEmailAndPassword', 'signUpWithEmailAndPassword'])
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule, MaterialModule],
      providers: [ReactiveFormsModule,
        {
          provide: FirebaseApp, useValue: firebaseAppSpy
        },
        {
          provide: AuthService, useValue: authServiceSpy
        },
        {
          provide: Router, useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
    template = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check all auth states', () => {
    const title = template.querySelector('.title').textContent;
    expect(component.authStep).toBe('chooseProvider', 'default authStep is chooseProvider');
    expect(title).toContain('Sign in', 'title to be sign in');

    component.changeStep('checkEmail');
    fixture.detectChanges();
    let subtitle = template.querySelector('.subtitle').textContent;
    expect(component.authStep).toBe('checkEmail', 'changed step  equal to changeStep argument');
    expect(subtitle).toContain('Enter your email', 'title to be sign in');

    component.changeStep('fail');
    fixture.detectChanges();
    subtitle = template.querySelector('.subtitle') && template.querySelector('.subtitle').textContent;
    expect(component.authStep).toBe('fail', 'authStep should be chamged');
    expect(subtitle).toBeNull();
  });

  it('should check register form', () => {
    component.changeStep('register');
    fixture.detectChanges();
    const emailCtrl = component.registerForm.get('email');
    const passwordCtrl = component.registerForm.get('password');
    const submitBtn: HTMLButtonElement = template.querySelector('.sign-button');
    expect(component.registerForm.pristine).toBeTruthy('pristine');

    emailCtrl.markAsTouched();
    expect(component.registerForm.touched).toBeTruthy('touched');

    emailCtrl.setValue('artem');
    expect(emailCtrl.invalid).toBeTruthy('email not valid');

    emailCtrl.setValue('artem@gmail.com');
    passwordCtrl.setValue('a');
    expect(emailCtrl.valid).toBeTruthy('email to be valid');
    expect(passwordCtrl.invalid).toBeTruthy('password to be invalid');

    passwordCtrl.setValue('123456');
    expect(passwordCtrl.valid).toBeTruthy('password to be valid');
    expect(component.registerForm.valid).toBeTruthy();
    fixture.detectChanges();
    expect(submitBtn.disabled).toBeFalsy('button not to be disabled');
  });

  it('check register method', () => {
    component.register();
    fixture.detectChanges();
    expect(AuthService.signUpWithEmailAndPassword)
  });
});
