import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsGenre } from '@app/movies/models/movie.model';
import { PopularResults } from '@app/movies/models/popular-movies.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {
  @Input() genreSelected: string;
  @Input() movies: any[] = [];
  constructor(private router: Router) { }

  goToMovieDetail(id): void {
    this.router.navigate(['/movies/' + id]);
  }
}
