import { Component, OnInit } from '@angular/core';
import { ID } from '../modele/id';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { UseridentifiantsService } from '../services/useridentifiants.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  identifiants: ID = { id: "", mdp: "" };
  mdpforget: boolean = false;

  constructor(public authentification: AuthService, public token: TokenService, public router: Router, public useridentifiants: UseridentifiantsService) {
    // console.log("Etat du token avant:", this.token.connecte); 
    // this.token.connexion();
    console.log("Etat du token dans connexion :", this.token.connectiontoken);

  }

  envoieID() {
    var id1 = this.useridentifiants.useridentifiants.id1;
    var id2 = this.useridentifiants.useridentifiants.id2;
    console.log('id1 id: ', id1[0].id);
    console.log('id1 mdp: ', id1[0].mdp);
    console.log('id2 id: ', id2[0].id);
    console.log('id2 mdp: ', id2[0].mdp);
    // console.log("On a mis le formulaire", this.identifiants);
    // this.authentification.setConnecte();
    console.log(this.identifiants.id)
    var id = this.identifiants.id;
    var mdp = this.identifiants.mdp;
    var mdpString = this.identifiants.mdp.toString();
    // Si Nb de caractère pour id et md sont sup ou = 6
    if (id.length >= 6 && mdpString.length >= 6) {
      // Vérification du mot de passe
      // if ((this.identifiants.id == "didier" && this.identifiants.mdp == "123456") || (this.identifiants.id == "gerald" && this.identifiants.mdp == "123456")) {
      if ((this.identifiants.id == id1[0].id && this.identifiants.mdp == id1[0].mdp) || (this.identifiants.id == id2[0].id && this.identifiants.mdp == id2[0].mdp)) {
        // L'identification est correcte
        // Changement etat token a true
        this.token.tokenconnexion();
        console.log("Etat du token en sortie connexion :", this.token.connectiontoken);
        // redirection vers intranet
        this.router.navigate(['/intranet/administration']);
      } else { // Sinon
        this.authentification.setConnecte();
        console.log("------------------------------------");
        console.log("Les identifiants sont faux !!!!!!!");
        console.log("------------------------------------");
        if (id == "didier") {
          console.log("Identifiant OK : " + id + " est le bon identifiant");
        } else {
          console.log("Identifiant FAUX : " + id + " n'est pas le bon identifiant")
        }
        if (mdp == "123456") {
          console.log("Mot de passe OK : " + mdp + " est le bon mot de passe");
          console.log("------------------------------------");
        } else {
          console.log("Mot de passe FAUX : " + mdp + " n'est pas le bon mot de passe");
          console.log("------------------------------------");
        }
      }

    } else {
      this.authentification.setConnecte();
      console.log("------------------------------------");
      console.log("Les nombres de caractères sont faux !!!!!!!");
      console.log("------------------------------------");
      if (id.length >= 6) {
        console.log("Identifiant OK : " + id + " supérieur ou égal à 6 caractères")
      } else {
        console.log("Identifiant INCORRECT : " + id + " inférieur à 6 caractères")
      }

      if (mdpString.length >= 6) {
        console.log("Identifiant OK : " + mdp + " supérieur ou égal à 6 caractères")
        console.log("------------------------------------");
      } else {
        console.log("Mot de passet INCORRECT : " + mdp + " inférieur à 6 caractères")
        console.log("------------------------------------");
      }
    }

  }

  setmdpforget() {
    console.log("Oh zut ca marche");
    this.mdpforget = !this.mdpforget;
  }

  ngOnInit() {
    console.log("On a mis le formulaire", this.identifiants);

  }

}
