import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { PopularMovie } from '../models/popularMovies.model';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private readonly baseUrl: string = environment.api.base;
  private readonly apiKey: string = environment.api.key;

  constructor(private http: HttpClient) { }


  getPopularMovies(): Observable<PopularMovie> {
    return this.http.get<PopularMovie>(`${this.baseUrl}/movie/popular?${this.apiKey}`);
  }
}
