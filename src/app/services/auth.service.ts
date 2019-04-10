import { Injectable } from '@angular/core';
/**
 * Service permettant de gérer l'état de la connexion des utilisateurs
 * @class
 * @injectable
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * Variable indiquant si nous sommes connectés ou non
   */
  connecte:boolean=false;

  constructor() { }
  /**
   * Methode nous permettant de rédéfinir l'état de la connexion
   */
  setConnecte(){
    this.connecte = !this.connecte;
  }

 
}
