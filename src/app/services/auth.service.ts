import { Injectable } from '@angular/core';
<<<<<<< HEAD

=======
/**
 * Service permettant de gérer l'état de la connexion des utilisateurs
 * @class
 * @injectable
 */
>>>>>>> master
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
<<<<<<< HEAD
   *  Variable indiquant si nous sommes connectés ou non
   */
  connecte: boolean = false;
  oublie: boolean = false;
  constructor() {

  }
  setConnecte() {
    this.connecte = !this.connecte;
    console.log(this.connecte);
=======
   * Variable indiquant si nous sommes connectés ou non
   */
  connecte:boolean=false;

  constructor() {}
  /**
   * Methode nous permettant de rédéfinir l'état de la connexion
   */
  setConnecte(){
    this.connecte = !this.connecte;
>>>>>>> master
  }
}
