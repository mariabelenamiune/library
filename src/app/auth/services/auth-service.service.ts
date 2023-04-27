import { Injectable } from '@angular/core';


export interface Login {
  user: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
}
