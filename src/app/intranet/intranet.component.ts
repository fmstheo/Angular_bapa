import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.css']
})
export class IntranetComponent implements OnInit {

  constructor(public token: TokenService) { 
    // controle etat du token
console.log("Etat du token dans intranet :", this.token.connectiontoken);

  }

  ngOnInit() {
   
  }

}
