import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UseridentifiantsService {
useridentifiants;
  constructor(private maRequeteAjax: HttpClient) { 
    this.maRequeteAjax.get('/assets/datas/useridentifiants.json').subscribe(
      data => this.useridentifiants = data
    );
  }
}
