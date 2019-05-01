import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'NGBapa';
  constructor(){
    var config = {
      apiKey: "AIzaSyD0DRGrRiQY8PrIcOeGNrcKlsfva2-mYF8",
      authDomain: "bapa-web.firebaseapp.com",
      databaseURL: "https://bapa-web.firebaseio.com",
      projectId: "bapa-web",
      storageBucket: "bapa-web.appspot.com",
      messagingSenderId: "1013379228991"
    };
    firebase.initializeApp(config);
  }
}
