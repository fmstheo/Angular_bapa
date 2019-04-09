import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   *  Variable indiquant si nous sommes connectés ou non
   */
  connecte: boolean = false;
  oublie: boolean = false;
  constructor() {

  }
  setConnecte() {
    this.connecte = !this.connecte;
    console.log(this.connecte);
  }
}
