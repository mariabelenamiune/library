import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '@app/movies/services/movies.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent {

  movie: any;
  movieId: number;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.getDetailsMovie(params["id"])
    });
  }

  getDetailsMovie(id: number): void {
    this.moviesService.getMovieDetails(id).subscribe(movie => {
      if (movie) {
        this.movie = movie;
        console.log(movie)
      }
    })
  }
}
