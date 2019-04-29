import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContratTravail } from '../modeles/contrat-travail';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratTravailService {

  contratsSubject = new Subject<ContratTravail[]>();

  private contratsTravail:Array<ContratTravail>;

  constructor(public httpClient:HttpClient) {
    //this.getCT();
  }

  emitContratsSubject(){
    this.contratsSubject.next(this.contratsTravail.slice());
  }

  getContratsFromServer(){
    this.httpClient
      .get<ContratTravail[]>('https://bapa-web.firebaseio.com/contrats_travail.json')
      .subscribe(
        (reponse)=>{
          this.contratsTravail = reponse;
          this.emitContratsSubject();
        },
        (error)=>{
          alert('Erreur : '+error);
        }
      )
  }

  saveContratsToServer(){
    this.httpClient
      .put('https://bapa-web.firebaseio.com/contrats_travail.json', this.contratsTravail)
      .subscribe(
        ()=>{
          alert('Enregistrement terminé !');
        },
        (error)=>{
          alert('Erreur : '+error);
        }
      );
  }

  /* getCT(){
    this.CT.get<Array<ContratTravail>>('/assets/data/contrat_travail.json').subscribe(
      (data) => {
        // console.log('contrat-travail.service data: ', data);
        this.contratTravail = data;
        // console.log('contrat-travail.service : ', this.contratTravail);
      }
    );
  } */
}
