import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, ResultsGenre } from '@app/movies/models/movie.model';
import { MoviesService } from '@app/movies/services/movies.service';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent {

  movie: ResultsGenre;
  movieId: number;
  movieData$: Observable<ResultsGenre>;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.getDetailsMovie(params["id"])
    });
  }

  // async getDetailsMovie(id: number) {
  //   await this.moviesService.getMovieDetails(id).subscribe(movie => {
  //     this.movie = movie;
  //     console.log(movie)
  //   })
  // }

  getDetailsMovie(id: number) {
    this.movieData$ = this.moviesService.getMovieDetails(id).pipe(
      map(data => {
        return data;
      })
    )
  }
}
