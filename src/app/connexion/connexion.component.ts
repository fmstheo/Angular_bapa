import { Component, OnInit } from '@angular/core';
import { ID } from '../modele/id';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {



  identifiants:ID={id:"", mdp:""};

  constructor(public autentification :AuthService) {}

  envoieID(){
    // console.log("On a mis le formulaire", this.identifiants);
  }

  ngOnInit() {
    console.log("On a mis le formulaire", this.identifiants);
  }

}
