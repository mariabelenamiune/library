import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@auth/components/login/login.component';
import { ProfileComponent } from '@auth/components/profile/profile.component';

const routes: Routes = [
  {
    path: 'auth/login',
    redirectTo: 'auth/login'
  },
  {
    path: 'auth/profile',
    redirectTo: 'auth/profile'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
