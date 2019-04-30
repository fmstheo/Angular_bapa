import { Component, OnInit } from '@angular/core';
import { CongesService } from 'src/app/services/conges.service';
import { CongesdevjuniorService } from 'src/app/services/congesdevjunior.service';

@Component({
  selector: 'app-gestion-manager',
  templateUrl: './gestion-manager.component.html',
  styleUrls: ['./gestion-manager.component.css']
})
export class GestionManagerComponent implements OnInit {
  
  constructor(public data:CongesService, public datacongesdevjunior:CongesdevjuniorService) {

   }

 
  ngOnInit() {
 
  }

}

// constructor(public data:ManagerService) { }