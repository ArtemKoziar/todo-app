import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewBoardService } from '../view-board/view-board.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoCarouselComponent } from './components/todo-carousel/todo-carousel.component';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from './services/auth.service';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

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
    ViewBoardService,
    AuthService,
    AngularFireAuthGuard,
  ],
  declarations: [TodoCarouselComponent, EmailValidatorDirective]
})
export class SharedModule {
}
