import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: string;
  admin: number = 2;

  constructor() { }
}
