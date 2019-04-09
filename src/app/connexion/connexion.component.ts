import { Component, OnInit } from '@angular/core';
import { ID } from '../modele/id';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
<<<<<<< HEAD

=======
>>>>>>> 0c29ef0b59bcb0adc085beb876491753ccafd8dd
export class ConnexionComponent implements OnInit {

  identifiants:ID={id:'', mdp:''};

<<<<<<< HEAD
  mdpOublie: boolean = false;

  constructor(public authentification:AuthService) {}
=======
  constructor(public authentification:AuthService) { }
>>>>>>> 0c29ef0b59bcb0adc085beb876491753ccafd8dd

  ngOnInit() {
    console.log("Coucou ID", this.identifiants.id);
  }

<<<<<<< HEAD
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
=======
  envoieID(){
    console.log("On a soumis le formulaire", this.identifiants);
    this.authentification.setConnecte();
>>>>>>> 0c29ef0b59bcb0adc085beb876491753ccafd8dd
  }

}
