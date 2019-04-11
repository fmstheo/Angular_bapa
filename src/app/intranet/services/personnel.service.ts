import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personnel } from '../modeles/personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  personnelS:Array<Personnel>;

  constructor(public httpPersonnel : HttpClient) {
    this.getPersonnel();
  }
  getPersonnel() {
    this.httpPersonnel.get<Array<Personnel>>('/assets/data/personnel.json').subscribe(
      (data) => {
        console.log('data du service personnel coté service: ',data);
        this.personnelS = data;
      }
    );
  }
}
