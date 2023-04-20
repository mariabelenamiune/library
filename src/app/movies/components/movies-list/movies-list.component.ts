import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MovieGenre } from '@app/movies/models/movie.model';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {
  @Input() moviesSelected: any;
  @Input() genreSelected: string;

  constructor() { }
}
