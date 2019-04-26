import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StagiaireGretaService {
StgGreta;
  constructor(private maRequeteAjax:HttpClient) {
    console.log('stagiaire du gretat');
    this.maRequeteAjax.get('assets/stagiaire-greta.json').subscribe(
      data => this.StgGreta =data
    );
   }
}
