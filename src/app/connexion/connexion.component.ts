import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Id } from '../modeles/id';
=======
import { ID } from '../modele/id';
>>>>>>> master
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
<<<<<<< HEAD
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
    
  }

=======
  /**
   * Objet type ID pour stocker les identifiants saisis dans le formulaire
   * Double binding avec ngModel dans le formulaire
   */
  identifiants:ID={id:'', mdp:'', infos:''};
  /**
   * Booléen permettant de gérer l'affichage du formulaire mot de passe oublié
   */
  mdpOublie:boolean = false;
  /**
   * @param authentification Pointer vers le service d'authentification (AuthService)
   */
  constructor(public authentification:AuthService) { }

  ngOnInit() {
    console.log("Coucou ID", this.identifiants.id);
  }
  /**
   * Méthode déclenchée sur le submit du formulaire pour récupérer les données
   */
  envoieID(argumentQuelconque){
    console.log("Nous récupérons le formulaire : ", argumentQuelconque.value);
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
>>>>>>> master
}
