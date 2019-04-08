import { Component, OnInit } from '@angular/core';
import { ID } from '../modele/id';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connecte:boolean=false;

  identifiants:ID={id:'', mdp:''};

  constructor() { }

  ngOnInit() {
    console.log("Coucou ID", this.identifiants.id);
  }

  envoieID(){
    console.log("On a soumis le formulaire", this.identifiants);
  }

}
