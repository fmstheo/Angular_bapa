import { Component, OnInit } from '@angular/core';
import { Id } from '../modeles/id';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
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

}
