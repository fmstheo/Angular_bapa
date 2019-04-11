import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(public httpPersonnel : HttpClient) {

  }
  getFaq() {
    this.httpPersonnel.get('/assets/data/faq.json').subscribe(
      (data) => console.log(data)
    );
  }
}
