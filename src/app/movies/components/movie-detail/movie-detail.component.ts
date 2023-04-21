import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultsGenre } from '@app/movies/models/movie.model';
import { MoviesService } from '@app/movies/services/movies.service';
import { Observable, finalize, map } from 'rxjs';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent {

  movieId: number;
  movie$: Observable<ResultsGenre>;
  movieData: boolean = false;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.getDetailsMovie(params["id"])
    });
  }

  getDetailsMovie(id: number) {
    this.movie$ = this.moviesService.getMovieDetails(id).pipe(
      finalize(() => (this.movieData = false)),
      map(movie => movie)
    );
  }
}
