/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@movies/services/movies.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: any;

  constructor(private moviesService: MoviesService) { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void { }

  obtainPopularMovies() {
    this.moviesService.getPopularMovies().subscribe((response) => {
      this.movies = response.results;
    });
  }
}
