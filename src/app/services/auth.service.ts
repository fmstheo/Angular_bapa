import { Injectable } from '@angular/core';


//service permettant de gérer l'état de la connexion
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variable indiquant si nous sommes connecté ou pas
  connecte:boolean=false;
  oublie:boolean=false;
  constructor() { }


  setConnecte(){
    this.connecte=!this.connecte;
  }
  setforgot(){
    this.oublie=!this.oublie;
  }
}



