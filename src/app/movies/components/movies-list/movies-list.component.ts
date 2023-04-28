import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {
  @Input() genreSelected: string;
  @Input() movies: any;
  constructor(private router: Router) {
  }

  goToMovieDetail(id): void {
    this.router.navigate(['/movies/' + id]);
  }
}
