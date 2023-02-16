import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Qod } from '../models/quote.model';

@Injectable({
  providedIn: 'root'
})

export class QuotesService {

  private readonly baseUrl: string = environment.api.quote;

  constructor(private http: HttpClient) { }


  getQuoteOfTheDay(): Observable<Qod> {
    return this.http.get<Qod>(`${this.baseUrl}/qod`);
  }
}
