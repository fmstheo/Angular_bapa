import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personnel } from '../modeles/personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  personnels:Array<Personnel>;
  personnelUrl = 'assets/data/personnel.json';

  constructor(public http : HttpClient) {
    this.getPersonnel();
  }
  getPersonnel() {
    console.log('this.personnelUrl :',this.personnelUrl)
    return this.http.get<Array<Personnel>>(this.personnelUrl);
    /* this.http.get<Array<Personnel>>('/assets/data/personnel.json').subscribe(
      (data) => {
        console.log('data du service personnel coté service: ',data);
        this.personnels = data;
      }
    ); */
  }
  putPersonnel(personnels:Array<Personnel>){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.http.put<Array<Personnel>>(this.personnelUrl, personnels, httpOptions).subscribe(
      (data) => {
        console.log('data du service personnel coté service: ',data);
        this.personnels = data;
      } 
    ); 
  }
}
