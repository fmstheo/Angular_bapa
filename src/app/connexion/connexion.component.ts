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
    console.log(this.identifiants.id)
    var id = this.identifiants.id;
    var mdp = this.identifiants.mdp;
    var mdpString = this.identifiants.mdp.toString();
    // Si Nb de caractère pour id et md sont sup ou = 6
    if (id.length >= 6 && mdpString.length >= 6) {
      // Vérification du mot de passe
      if ((this.identifiants.id == "didier" && this.identifiants.mdp == "123456") || (this.identifiants.id == "gerald" && this.identifiants.mdp == "123456")) {
        // L'identification est correcte
        // redirection vers intranet
        document.location.href = "/intranet/administration";
      } else { // Sinon
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
    console.log("On zut ca marche");
    this.mdpforget = !this.mdpforget;

  }

  ngOnInit() {
    console.log("On a mis le formulaire", this.identifiants);
  }

}
