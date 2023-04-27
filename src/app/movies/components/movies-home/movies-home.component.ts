import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  dataAvailable: boolean = false;
  errorMessage: boolean = false;
  movies: ResultsGenre[] | PopularResults[] = [];

  constructor(private moviesService: MoviesService, private router: Router,) { }

  ngOnInit(): void {
    this.router.navigate(
      [],
      {
        queryParams: { genre: 1 },
        queryParamsHandling: 'merge'
      });
    this.moviesService.getPopularMovies().pipe(
      delay(5000),
      finalize(() => (this.dataAvailable = true)),
      map(movie =>
        this.movies = movie.results)
    ).subscribe(
      (movie => {
        if (movie) {
          this.movies = movie;
          this.dataAvailable = true;
        }
      }
      )
    );
  }

  genreSelected(event): void {
    this.genreSelectedValue = event.name;
    this.getMoviesByGenre(event.id);
    this.router.navigate(
      [],
      {
        queryParams: { genre: event.id },
        queryParamsHandling: 'merge'
      });
  }

  getMoviesByGenre(genre) {
    this.moviesService.getMovieByGenre(genre).pipe(
      delay(5000),
      finalize(() => (this.dataAvailable = true)),
      map(movie =>
        this.movies = movie.results),
      catchError(err => {
        console.error(err);
        return of(err)
      })
    ).subscribe(
      (movie => {
        if (movie) {
          this.movies = movie;
          this.dataAvailable = true;
        }
      }
      )
    );
  }
}
