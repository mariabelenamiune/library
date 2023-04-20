/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';


@Injectable({
  providedIn: 'root'
})

export class MoviesInterceptorService implements HttpInterceptor {

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const api_key: string = environment.api.api_key;

    if (!httpRequest.url.includes("discover"))
      httpRequest = httpRequest.clone({
        setParams: {
          api_key: api_key
        }
      });
    return next.handle(httpRequest);
  }
}
