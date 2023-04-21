import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable, catchError, map, of } from 'rxjs';
import { PopularMovie } from '@app/movies/models/popular-movies.model';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly baseUrl: string = environment.api.base;


  constructor(private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get<PopularMovie>(
      `${this.baseUrl}/movie/popular?`
    ).pipe(this.handleResponse);
  }

  getMovieByGenre(genre: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=c0517ed28868f122442028d5560db1d4&with_genres=${genre}`).pipe(this.handleResponse);
  }

  getMovieDetails(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}?`)
  }

  private handleResponse(observable: Observable<any>): Observable<any> {
    return observable.pipe(map(response => ({
      results: response.results
    })),
      catchError((err) => {
        console.log(err);
        return of([]);
      }),
    )
  }
}
