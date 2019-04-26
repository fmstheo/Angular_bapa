import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//partie renomer suite au constructor

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  reprisechatjson;//on crée la variable
  constructor(private maRequeteAjax: HttpClient) {
    //get= vas chercher les donner dans json
    // subscribe met les informations la variable "reprisechatjson"
   console.log('tutu lol');
    this.maRequeteAjax.get('assets/chat.json').subscribe(
      data => this.reprisechatjson= data
      );
  }
}
