import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from '@movies/components/movies-list/movies-list.component';
import { MovieDetailComponent } from '@movies/components/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesListComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// eslint-disable-next-line prettier/prettier
export class MoviesRoutingModule { }
