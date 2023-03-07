import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Movie } from '@app/movies/models/movie.model';
import { PopularMovie } from '@app/movies/models/popular-movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly baseUrl: string = environment.api.base;
  private readonly apiKey: string = environment.api.key;

  // eslint-disable-next-line prettier/prettier
  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<PopularMovie> {
    return this.http.get<PopularMovie>(
      `${this.baseUrl}/movie/popular?${this.apiKey}`
    );
  }
}
