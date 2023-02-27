import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieDetailComponent } from "@app/components/movie-detail/movie-detail.component";
import { MoviesListComponent } from "@app/components/movies-list/movies-list.component";
import { TopNavComponent } from "@app/components/top-nav/top-nav.component";

@NgModule({
  declarations: [MovieDetailComponent, MoviesListComponent, TopNavComponent],
  imports: [CommonModule],
  exports: [MovieDetailComponent, MoviesListComponent, TopNavComponent]
})
export class MoviesModule {}
