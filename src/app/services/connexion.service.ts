import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Identifiants } from '../intranet/modeles/identifiants';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {


  id:Array<Identifiants>;


  constructor(public requete:HttpClient) {
    this.verifconnexion();
   }




    verifconnexion(){
    this.requete.get<Array<Identifiants>>('/assets/data/identifiants.json').subscribe((data)=>{
      this.id=data;
    }
    )
  }
 
    }
  

