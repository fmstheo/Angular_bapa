import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  connectiontoken: boolean = false;
  constructor() { }
    
  tokenconnexion() {
    this.connectiontoken = !this.connectiontoken;
  }
}
