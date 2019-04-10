import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContratTravail } from '../modeles/contrat-travail';

@Injectable({
  providedIn: 'root'
})
export class ContratTravailService {
  ContratTravail:Array<ContratTravail>;
  constructor(public CT:HttpClient) {
    this.getCT();
  }
  getCT(){
    this.CT.get<Array<ContratTravail>>('/assets/data/contrat_travail.json').subscribe(
      (data) => {
        console.log('contrat-travail.service : ',this, data);
        this.ContratTravail = data;
      }
    );
  }
}
