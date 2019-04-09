import { Component, OnInit } from '@angular/core';
import { ID } from '../modele/id';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  /**
   * Objet type ID pour stocker les identifiants saisis dans le formulaire
   * Double binding avec ngModel dans le formulaire
   */
  identifiants:ID={id:'', mdp:''};
  /**
   * Booléen permettant de gérer l'affichage du formulaire mot de passe oublié
   */
  mdpOublie:boolean = false;

  constructor(public authentification:AuthService) { }

  ngOnInit() {
    console.log("Coucou ID", this.identifiants.id);
  }
  /**
   * Méthode déclenchée sur le submit du formulaire pour récupérer les données
   */
  envoieID(){
    console.log("On a soumis le formulaire", this.identifiants);
    this.authentification.setConnecte();
  }
  /**
   * Afficher l'état des identifiants dans la console
   */
  getIdentifiants(){
    console.log("On a soumis le formulaire", this.identifiants);
  }
  /**
   * Méthode pour afficher ou masquer le formulaire 'mot de passe oublié' dans la vue HTML
   */
  setMdpOublie(){
    this.mdpOublie = !this.mdpOublie;
  }
}
