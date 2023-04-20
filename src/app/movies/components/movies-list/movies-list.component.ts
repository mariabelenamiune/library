import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MovieGenre } from '@app/movies/models/movie.model';
import { MoviesService } from '@app/movies/services/movies.service';
import { share } from 'rxjs';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {
  @Input() moviesSelected: any;
  @Input() genreSelected: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToMovieDetail(id): void {
    this.router.navigate(['/movies/' + id]);
  }
}
