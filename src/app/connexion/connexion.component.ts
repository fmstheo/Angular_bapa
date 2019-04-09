import { Component, OnInit } from '@angular/core';
import { ID } from '../modele/id';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

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
  }

}
