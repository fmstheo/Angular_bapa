import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> master

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

<<<<<<< HEAD
  constructor(public httpPersonnel : HttpClient) {

  }
  getFaq() {
    this.httpPersonnel.get('/assets/data/faq.json').subscribe(
      (data) => console.log(data)
    );
  }
=======
  constructor() { }
>>>>>>> master
}
