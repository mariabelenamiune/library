import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable, catchError, map } from 'rxjs';
import { PopularMovie } from '@app/movies/models/popular-movies.model';
import { MovieGenre, ResultsGenre } from '../models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly baseUrl: string = environment.api.base;


  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<PopularMovie> {
    return this.http.get<PopularMovie>(
      `${this.baseUrl}/movie/popular?`
    ).pipe(this.handleResponse);
  }

  getMovieByGenre(genre: string): Observable<MovieGenre> {
    return this.http.get<MovieGenre>(
      `${this.baseUrl}/discover/movie?with_genre=${genre}`)
      .pipe(this.handleResponse);
  }

  getMovieDetails(id): Observable<ResultsGenre> {
    return this.http.get<ResultsGenre>(`${this.baseUrl}/movie/${id}?`).pipe(
      catchError(err => {
        throw 'error in source. Details: ' + err.message;
      })
    )

  }

  private handleResponse(observable: Observable<any>): Observable<any> {
    return observable.pipe(map(response => ({
      results: response.results
    })),
      catchError((err) => {
        console.log(err);
        throw 'error in source. Details: ' + err.message;
      }),
    )
  }
}
