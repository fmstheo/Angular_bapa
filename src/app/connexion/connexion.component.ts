import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  

  identifiants={id:"",mdp:""};


  constructor(public authentification:AuthService,public verification:ConnexionService) { }

  ngOnInit() {
  }
    envoieID(f){
      for(var i=0;i<this.verification.id.length;i++){
        if(this.verification.id[i].login==this.identifiants.id && this.verification.id[i].mdp==this.identifiants.mdp){
          this.authentification.setConnecte();
        }
      }
      
      
      
        console.log(f);
      console.log("formulaires fournies",this.identifiants);
      
      console.log("verif",this.verification.id[0].login);
    }
    mdpOublie(){
      this.authentification.setforgot();
    }
    
      
    
  

}
