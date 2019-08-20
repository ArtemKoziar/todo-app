import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login', component: LoginComponent,
    ...canActivate(redirectLoggedInTo(['tasks']))
  },
  {
    path: 'tasks', loadChildren: () => import('./main/main.module').then(mod => mod.MainModule),
    ...canActivate(redirectUnauthorizedTo(['login'])),
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
