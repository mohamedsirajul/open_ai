import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/sessions/login/login.component';
import { RegisterComponent } from './components/sessions/register/register.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { FirePredComponent } from './components/fire-pred/fire-pred.component';
import { TreeCountComponent } from './components/tree-count/tree-count.component';
import { VoteComponent } from './components/vote/vote.component';
import { FaceRegComponent } from './components/face-reg/face-reg.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'dashboard',
    // canActivate: [AuthGuard], 
    component: DashboardComponent 
   },
  { path: 'chatbox', 
  // canActivate: [AuthGuard], 
  component: ChatboxComponent 
  },
  { path: 'fire_pred',
  // canActivate: [AuthGuard], 
   component: FirePredComponent },
   { path: 'tree_pred',
  //  canActivate: [AuthGuard], 
   component: TreeCountComponent },
   { path: 'vote',
  //  canActivate: [AuthGuard], 
   component: VoteComponent },
   { path: 'face',
  //  canActivate: [AuthGuard], 
   component: FaceRegComponent },
  // Add other routes or redirect to a 404 page if necessary
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
