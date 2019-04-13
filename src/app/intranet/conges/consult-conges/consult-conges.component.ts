import { Component, OnInit } from '@angular/core';
import { ConsultationCongesService } from '../../services/consultation-conges.service';

@Component({
  selector: 'app-consult-conges',
  templateUrl: './consult-conges.component.html',
  styleUrls: ['./consult-conges.component.css']
})
export class ConsultCongesComponent implements OnInit {


  //pointage sur le service ConsultationCongesService
  constructor(public consultation_demande:ConsultationCongesService) { }

  ngOnInit() {
    this.consultation_demande.consultation_conges;
  }
  
}
