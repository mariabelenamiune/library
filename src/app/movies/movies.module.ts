import { NgModule } from '@angular/core';
import { MovieDetailComponent } from '@movies/components/movie-detail/movie-detail.component';
import { MoviesListComponent } from '@movies/components/movies-list/movies-list.component';
import { MoviesRoutingModule } from '@app/movies/movies-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [MovieDetailComponent, MoviesListComponent],
  imports: [MoviesRoutingModule, SharedModule]
})

export class MoviesModule { }
