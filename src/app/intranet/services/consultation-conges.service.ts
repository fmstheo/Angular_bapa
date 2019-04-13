import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conges } from '../modeles/conges';
@Injectable({
  providedIn: 'root'
})
export class ConsultationCongesService {

  consultation_conges:Array<Conges>;

  constructor(public requetes:HttpClient) {
    this.getConges();
   }

   getConges(){

    // récupération des données présentes dans la fichier JSON conges_0.json
     this.requetes.get<Array<Conges>>('/assets/data/conges_0.json').subscribe(
       (data)=>{
         this.consultation_conges=data;
         console.log('consultation_conges :', this.consultation_conges);
         
       }
     )
   }
}
