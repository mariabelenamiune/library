import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MovieGenre, ResultsGenre } from '@app/movies/models/movie.model';
import { PopularResults } from '@app/movies/models/popular-movies.model';
import { MoviesService } from '@app/movies/services/movies.service';
import { Observable, delay, finalize, map, catchError, of } from 'rxjs';

interface Genre {
  name: string;
  id: number;
}
@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})

export class MoviesHomeComponent {
  genreControl = new FormControl<Genre | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  genres: Genre[] = [
    { name: 'Action', id: 28 },
    { name: 'Adventure', id: 12 },
    { name: 'Animation', id: 16 },
    { name: 'Comedy', id: 35 },
    { name: 'Crime', id: 80 },
    { name: 'Documentary', id: 99 },
    { name: 'Drama', id: 18 },
    { name: 'Horror', id: 27 },
  ];

  genreSelectedValue: string = "Popular";
  dataAvailable: boolean = true;
  errorMessage: boolean = false;
  data$: Observable<ResultsGenre[] | PopularResults[]>

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.data$ = this.moviesService.getPopularMovies().pipe(
      delay(5000),
      finalize(() => (this.dataAvailable = false)),
      map(movie => movie.results)
    );
  }

  genreSelected(event): void {
    this.genreSelectedValue = event.name;
    this.getMoviesByGenre(event.id);
  }

  getMoviesByGenre(genre) {
    this.data$ = this.moviesService.getMovieByGenre(genre).pipe(
      finalize(() => (this.dataAvailable = false)),
      map(movie => movie.results),
      catchError(err => {
        console.error(err);
        return of(err)
      })
    )
  }
}
