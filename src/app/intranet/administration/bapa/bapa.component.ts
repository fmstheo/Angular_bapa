import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-bapa',
  templateUrl: './bapa.component.html',
  styleUrls: ['./bapa.component.css']
})
export class BapaComponent implements OnInit {

  constructor(public token: TokenService) { 
    // controle etat du token
    console.log("Etat du token open intra:", this.token.connectiontoken);
    // controle etat du token
    // this.token.connexion();
    // console.log("Etat du token phase 2 intra:", this.token.connectiontoken);
    // // this.token.connexion();
    // // console.log("Etat du token phase 3 intra false:", this.token.connectiontoken);
  }

  ngOnInit() {
    
  }

}
