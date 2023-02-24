import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any;


  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {}

  obtainPopularMovies() {
    this.moviesService.getPopularMovies().subscribe((response) => {
      this.movies = response.results;
    });
  }

}
