import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { HttpClient } from '@angular/common/http'

>>>>>>> master
import { Faq } from '../modeles/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
<<<<<<< HEAD
  faqListe: Array<Faq>;

  constructor(public requetes: HttpClient) {
    this.getFaq();
  }

  getFaq() {
=======

  faqListe:Array<Faq>;
  // faqListe:Faq[];

  constructor(public requetes:HttpClient) {
    this.getFaq(); // Appel des données externes
  }
  /**
   * Méthodes qui fait une requêtes XHR avec un observable
   */
  getFaq(){
>>>>>>> master
    this.requetes.get<Array<Faq>>('/assets/data/faq.json').subscribe(
      (data) => {
        console.log(this, data);
        this.faqListe = data;
      }
    );
  }
}
