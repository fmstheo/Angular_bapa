import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {


  constructor(public requetes:HttpClient) {
    this.getManager(); // Appel des données externes
  }
  /**
   * Méthodes qui fait une requêtes XHR avec un observable
   */
  getManager(){
    this.requetes.get('/assets/data/personnel.json').subscribe(
      data => console.log(data)
    );
  }
}
