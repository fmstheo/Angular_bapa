import { Component, OnInit } from '@angular/core';
import { ID } from '../modele/id';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  identifiants:ID={id:'', mdp:''};

  mdpOublie:boolean = false;

  constructor(public authentification:AuthService) { }

  ngOnInit() {
    console.log("Coucou ID", this.identifiants.id);
  }

  envoieID(){
    console.log("On a soumis le formulaire", this.identifiants);
    this.authentification.setConnecte();
  }

  getIdentifiants(){
    console.log("On a soumis le formulaire", this.identifiants);
  }

  setMdpOublie(){
    this.mdpOublie = !this.mdpOublie;
  }
}
