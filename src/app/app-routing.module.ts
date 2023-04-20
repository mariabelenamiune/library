import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesHomeComponent } from '@movies/components/movies-home/movies-home.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
