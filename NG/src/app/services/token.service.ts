import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: string;
  hLevel: number = 3;

  constructor() { }
}
