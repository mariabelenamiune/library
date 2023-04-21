import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {
  @Input() genreSelected: string;
  @Input() data$: Observable<any>;
  constructor(private router: Router) { }

  goToMovieDetail(id): void {
    this.router.navigate(['/movies/' + id]);
  }
}
