import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(public httpPersonnel : HttpClient) {
    this.getPersonnel();
  }
  
  getPersonnel(){
    this.httpPersonnel.get('/assets/data/personnel.json').subscribe(
      (data) => console.log(data)
    );
  }
}
