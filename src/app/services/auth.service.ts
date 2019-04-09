import { Injectable } from '@angular/core';
<<<<<<< HEAD

=======
/**
 * Service permettant de gérer l'état de la connexion des utilisateurs
 * @class
 * @injectable
 */
>>>>>>> 0c29ef0b59bcb0adc085beb876491753ccafd8dd
@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD
/*
* Variable indiquant si nous sommes connecté ou non
*/
  connecte:boolean=false;

  constructor() {}

  setConnecte() {
=======
  /**
   * Variable indiquant si nous sommes connectés ou non
   */
  connecte:boolean=false;

  constructor() { }
  /**
   * Methode nous permettant de rédéfinir l'état de la connexion
   */
  setConnecte(){
>>>>>>> 0c29ef0b59bcb0adc085beb876491753ccafd8dd
    this.connecte = !this.connecte;
  }
}
