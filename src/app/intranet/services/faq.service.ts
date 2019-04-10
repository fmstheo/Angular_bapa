import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  faqListe: Array<Faq>;

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
