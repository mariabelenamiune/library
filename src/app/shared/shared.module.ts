import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material/material.module';
import { SpinnerModule } from '@shared/spinner';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule, SpinnerModule]
})

export class SharedModule { }
