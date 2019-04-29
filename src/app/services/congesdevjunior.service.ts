import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongesdevjuniorService {
congesdevjunior
  constructor(private maRequeteAjax: HttpClient) { 
    this.maRequeteAjax.get('/assets/datas/congesdevjunior.json').subscribe(
      data => this.congesdevjunior = data
    );
  }
}


