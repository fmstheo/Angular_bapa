import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
/*
* Variable indiquant si nous sommes connecté ou non
*/
  connecte:boolean=false;

  constructor() {}

  setConnecte() {
    this.connecte = !this.connecte;
  }
}
