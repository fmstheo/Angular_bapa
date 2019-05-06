import { ConnexionService } from './../services/connexion.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  pseudo: string;
  mdp: string;
  error: boolean = false;
  msgError: string;

  constructor(private authService: AuthService, private router: Router, public connexionService: ConnexionService) {

  }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {

    if (this.pseudo !== this.authService.authentification[0].identifiant) {
      this.msgError = " Les informations rentrés son incorect";
      this.error = true;

    } else if (this.mdp !== this.authService.authentification[0].motdepasse) {
      this.msgError = " mot de passe inccorect";
      this.error = true;
    } else {
      this.error = false;
      this.authStatus = this.authService.isAuth;
      this.router.navigate(['gestion']);

    }


  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;

  }
}
