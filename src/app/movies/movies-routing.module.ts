import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from '@movies/components/movies-list/movies-list.component';
import { MovieDetailComponent } from '@movies/components/movie-detail/movie-detail.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesHomeComponent
  },
  {
    path: 'movies',
    component: MoviesListComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  {
    path: 'movies/genre/:id',
    component: MoviesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MoviesRoutingModule { }
