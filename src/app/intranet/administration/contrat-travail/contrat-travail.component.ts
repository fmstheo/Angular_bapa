import { Component, OnInit } from '@angular/core';
import { ContratTravailService } from '../services/contrat-travail.service';

@Component({
  selector: 'app-contrat-travail',
  templateUrl: './contrat-travail.component.html',
  styleUrls: ['./contrat-travail.component.css']
})
export class ContratTravailComponent implements OnInit {

  constructor(public contrat:ContratTravailService) {
    
  }

  ngOnInit() {

  }

}
