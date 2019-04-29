import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  manager;
  constructor(private maRequeteAjax: HttpClient) {
    this.maRequeteAjax.get('/assets/datas/manager.json').subscribe(
      data => this.manager = data
    );
  }
}

