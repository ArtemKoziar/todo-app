import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login', component: LoginComponent,
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: () => redirectLoggedInTo(['tasks']) }
  },
  {
    path: 'tasks', loadChildren: () => import('./main/main.module').then(mod => mod.MainModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: () => redirectUnauthorizedTo(['login']) }
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
