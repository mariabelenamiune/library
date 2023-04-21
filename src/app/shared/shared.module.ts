import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/material/material.module';
import { SpinnerModule } from '@shared/material/spinner';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule, SpinnerModule]
})

export class SharedModule { }
