import { Component, OnInit } from '@angular/core';
import { CongesService } from 'src/app/services/conges.service';
import { CongesdevjuniorService } from 'src/app/services/congesdevjunior.service';

@Component({
  selector: 'app-consulter-demande',
  templateUrl: './consulter-demande.component.html',
  styleUrls: ['./consulter-demande.component.css']
})
export class ConsulterDemandeComponent implements OnInit {

  constructor(public data:CongesService, public datacongesdevjunior:CongesdevjuniorService) { }

  ngOnInit() {
  }

}


// constructor(public data:CongesService, public datacongesdevjunior:CongesdevjuniorService) {

// }