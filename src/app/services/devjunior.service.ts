import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevjuniorService {
  devjunior;
  constructor(private maRequeteAjax: HttpClient) {
    this.maRequeteAjax.get('/assets/datas/devjunior.json').subscribe(
      data => this.devjunior = data
    );
  }
}
