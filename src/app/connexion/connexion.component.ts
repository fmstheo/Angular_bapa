import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ID } from '../modele/id';
=======
import { Id } from '../modeles/id';
>>>>>>> 8309cb4b60d15c704f39da0f6ce53c1ed6dc099a
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
<<<<<<< HEAD

  identifiants: ID = { id: "", mdp: "" };
  mdpforget: boolean = false;
  
  constructor(public authentification: AuthService) { }

  envoieID() {
    // console.log("On a mis le formulaire", this.identifiants);
    this.authentification.setConnecte();
  }



  setmdpforget() {
    console.log("On zut ca marche");
    this.mdpforget = !this.mdpforget;

  }

  ngOnInit() {
    console.log("On a mis le formulaire", this.identifiants);
=======
  identifiants: Id = { id: '', mdp: '' };
  oublie: boolean = false;
  constructor(public authentification: AuthService) { }

  ngOnInit() {
    console.log(this.identifiants.id);
  }

  setForgotPwd() {
    this.oublie = !this.oublie;
  }

  envoieID(f) {
    this.authentification.setConnecte();
    console.log('On a soumis le formulaire avec pseudo : ', this.identifiants.id, ' et mdp :', this.identifiants.mdp);
    console.log('variable local form1 : ', f);
    
>>>>>>> 8309cb4b60d15c704f39da0f6ce53c1ed6dc099a
  }

}
