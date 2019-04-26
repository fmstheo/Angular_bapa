import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  stagiairejson;
  constructor(private maRequeteAjax: HttpClient) {
    console.log('liste stagiaire'); 
    this.maRequeteAjax.get('assets/stagiaire.json').subscribe(
      data => this.stagiairejson = data
    );
  }
}
