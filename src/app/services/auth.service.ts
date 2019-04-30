import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connecte: boolean = false;

  constructor() { }

  setConnecte() {
    this.connecte = !this.connecte;
  }
  

}
