import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
/*
* Variable indiquant si nous sommes connecté ou non
*/
  setConnecte() {
    this.connecte = !this.connecte;
  }
  connecte:boolean=false;

  constructor() {

  }
}
