import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  

  identifiants={id:"",mdp:""};


  constructor(public authentification:AuthService) { }

  ngOnInit() {
  }
    envoieID(){
      console.log("formulaires fournies",this.identifiants);
      this.authentification.setConnecte();
    }
    mdpOublie(){
      this.authentification.setforgot();
    }
  

}
