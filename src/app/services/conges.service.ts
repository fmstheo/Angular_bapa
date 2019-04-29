import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CongesService {
  conges;
  constructor(private maRequeteAjax: HttpClient) {
    this.maRequeteAjax.get('/assets/datas/conges.json').subscribe(
      data => this.conges = data
    );
   }
}

