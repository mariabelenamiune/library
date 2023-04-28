import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from '@movies/components/movie-detail/movie-detail.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesHomeComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  {
    path: 'movies?genre=id',
    component: MoviesHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MoviesRoutingModule { }
