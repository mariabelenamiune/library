import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@app/components/login/login.component';
import { ProfileComponent } from '@app/components/profile/profile.component';

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [CommonModule],
  exports: [ProfileComponent, LoginComponent]
})
export class AuthModule {}
