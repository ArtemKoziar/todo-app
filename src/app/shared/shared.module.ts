import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewBoardService } from '../view-board/view-board.service';
import { MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { TodoToolbarComponent } from '../todo-toolbar/todo-toolbar.component';
import { TodoSidenavComponent } from '../todo-sidenav/todo-sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoCarouselComponent } from './components/todo-carousel/todo-carousel.component';
import {MatDividerModule} from '@angular/material/divider';
import { AuthService } from './services/auth.service';
import { EmailValidatorDirective } from './directives/email-validator.directive';


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
    AuthService
  ],
  declarations: [TodoCarouselComponent, EmailValidatorDirective]
})
export class SharedModule {
}
