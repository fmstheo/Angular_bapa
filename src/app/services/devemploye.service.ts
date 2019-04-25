import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevemployeService {
devemploye;
  constructor(private maRequeteAjax: HttpClient) { 
    this.maRequeteAjax.get('/assets/datas/devemploye.json').subscribe(
      data => this.devemploye = data
      );
  }
}
