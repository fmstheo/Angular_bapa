import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public token: TokenService, public router: Router) { 
    if (this.token.connectiontoken == !true){
      console.log("Etat du token dans acceuil après redirect secu :", this.token.connectiontoken);
      this.router.navigate(['/connexion']);
    }
  }

  ngOnInit() {
    console.log("Etat du token dans acceuil :", this.token.connectiontoken);
  }
  
}
