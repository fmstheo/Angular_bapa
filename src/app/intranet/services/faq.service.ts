import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(public requetes:HttpClient) {
    this.getFaq();
  }

  getFaq(){
    this.requetes.get('/assets/data/faq.json').subscribe(
      (data)=> console.log(data)
    );
  }
}
