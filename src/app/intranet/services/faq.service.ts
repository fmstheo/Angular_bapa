import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Faq } from '../modeles/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  faqListe:Array<Faq>;

  constructor(public requetes:HttpClient) {
    this.getFaq(); // Appel des données externes
  }
  /**
   * Méthodes qui fait une requêtes XHR avec un observable
   */
  getFaq(){
    this.requetes.get<Array<Faq>>('/assets/data/faq.json').subscribe(
      (data) => {
        console.log(this, data);
        this.faqListe = data;
      }
    );
  }
}
