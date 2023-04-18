import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Movie } from '@app/movies/models/movie.model';
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
