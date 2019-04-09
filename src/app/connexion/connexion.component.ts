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

  mdpOublie: boolean = false;

  constructor(public authentification:AuthService) {}

  ngOnInit() {
    console.log("Coucou ID", this.identifiants.id);
  }

  /**
   *  Méthode déclenchée sur le submit du formulaire pour récupérer les données
   */
  envoieId(f) {
    console.log("Nous récupérons le formulaire",f.value);
    console.log("On a soumis le formulaire",this.identifiants);
    this.authentification.setConnecte();
    
  }

/**
 *  Afficher l'état des identifiants dans la console
 */
  setMdpOublie(){
    this.mdpOublie = !this.mdpOublie;
  }

}
