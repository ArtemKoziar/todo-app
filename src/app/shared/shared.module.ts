import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { TodoCarouselComponent } from './components/todo-carousel/todo-carousel.component';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { MaterialModule } from './material.module';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TodoCarouselComponent,
    EmailValidatorDirective,
    MatDividerModule
  ],
  providers: [
    AuthService,
    AngularFireAuthGuard,
  ],
  declarations: [TodoCarouselComponent, EmailValidatorDirective]
})
export class SharedModule {
}
