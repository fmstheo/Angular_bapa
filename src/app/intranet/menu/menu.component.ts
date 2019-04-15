import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  AccesManager:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  setAccesManager(){
    this.AccesManager = !this.AccesManager;
  }
}
