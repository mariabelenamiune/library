import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movies: any;

  constructor(private moviesService: MoviesService) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  obtainPopularMovies() {
    this.moviesService.getPopularMovies().subscribe((response) => {
      this.movies = response.results;
    });
  }
}
