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
  constructor(public authentification:AuthService) { }

  ngOnInit() {
    console.log(this.identifiants.id);
  }

  envoieID() {
    this.authentification.setConnecte();
    console.log('On a soumis le formulaire avec pseudo : ', this.identifiants.id, ' et mdp :', this.identifiants.mdp);
  }

}
