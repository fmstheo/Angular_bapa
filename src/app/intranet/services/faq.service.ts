import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Faq } from '../modeles/faq';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  faqListe:Array<Faq>;
  // faqListe:Faq[];

  constructor(public requetes:HttpClient, private local:Location) {
    this.getFaq(); // Appel des données externes
  }
  /**
   * Méthodes qui fait une requêtes XHR avec un observable
   */
  getFaq(){
    this.requetes.get<Array<Faq>>(this.local.prepareExternalUrl('assets/data/faq.json')).subscribe(
      (data) => {
        console.log(this, data);
        this.faqListe = data;
      }
    );
  }
}
