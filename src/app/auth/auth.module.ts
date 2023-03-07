/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core';
import { LoginComponent } from '@auth/components/login/login.component';
import { ProfileComponent } from '@auth/components/profile/profile.component';
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from '@auth/auth-routing.module';

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [SharedModule, AuthRoutingModule],
  exports: []
})
export class AuthModule { }
