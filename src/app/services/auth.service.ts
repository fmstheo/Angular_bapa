import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

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

  /**
   * Méthode de création d'un nouveau compte utilisateur
   * @param email 
   * @param password 
   */
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  /**
   * Méthode de connexion de l'utilisateur
   * @param email 
   * @param password 
   */
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  /**
   * méthode de réinitialisation du mot de passe via envoi email
   * @param email 
   */
  resetPassword(email: string){
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => alert("Email envoyé !"))
      .catch((error) => alert('Une erreur est survenue : ' + error))
  }

  /**
   * Méthode de déconnexion de l'utilisateur
   */
  signOutUser() {
    firebase.auth().signOut();
  }
}
