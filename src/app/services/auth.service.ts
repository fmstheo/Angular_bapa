import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD

  connecte: boolean = false;

  constructor() { }

  setConnecte() {
    this.connecte = !this.connecte;
  }

=======
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
>>>>>>> 8309cb4b60d15c704f39da0f6ce53c1ed6dc099a
}
