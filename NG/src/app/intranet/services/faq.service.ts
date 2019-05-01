import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faq } from '../modeles/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  faqListe: Array<Faq>;
  private faq2;

  constructor(public requetes: HttpClient) {
    this.getFaq();
  }

  getFaq() {
    this.requetes.get<Array<Faq>>('/assets/data/faq.json').subscribe(
      (data) => {
        console.log(this, data);
        this.faqListe = data;
      }
    );
  }

}
