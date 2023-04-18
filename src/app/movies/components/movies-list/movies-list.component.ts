import { Component, OnInit } from '@angular/core';
import { PopularResults } from '@app/movies/models/popular-movies.model';
import { MoviesService } from '@movies/services/movies.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: PopularResults[];
  errorMessage: string;
  errorResponse: boolean;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe((movies) => {
      this.movies = movies.results
    }
    )
  }
}
