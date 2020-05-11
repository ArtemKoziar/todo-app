import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { LoginCarouselComponent } from './components/login-carousel/login-carousel.component';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { MaterialModule } from './material.module';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    EmailValidatorDirective,
    LoginCarouselComponent
  ],
  providers: [
    AuthService,
    AngularFireAuthGuard,
  ],
  declarations: [ EmailValidatorDirective, LoginCarouselComponent]
})
export class SharedModule {
}
