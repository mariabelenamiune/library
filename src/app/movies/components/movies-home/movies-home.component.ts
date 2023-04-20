import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MovieGenre } from '@app/movies/models/movie.model';
import { MoviesService } from '@app/movies/services/movies.service';
import { Observable } from 'rxjs';

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

  moviesByGenre: MovieGenre;
  genreSelectedValue: string;

  constructor(private moviesService: MoviesService) { }

  genreSelected(event): void {
    this.genreSelectedValue = event.name;
    this.getMoviesByGenre(event.id);
  }

  getMoviesByGenre(genre) {
    this.moviesService.getMovieByGenre(genre).subscribe(movies => {
      this.moviesByGenre = movies.results;
    })
  }
}
