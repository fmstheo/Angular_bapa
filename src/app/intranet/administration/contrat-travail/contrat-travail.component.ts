import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContratTravailService } from '../services/contrat-travail.service';
import { ContratTravail } from '../modeles/contrat-travail';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contrat-travail',
  templateUrl: './contrat-travail.component.html',
  styleUrls: ['./contrat-travail.component.css']
})
export class ContratTravailComponent implements OnInit, OnDestroy {

  contrats: ContratTravail[];
  contratsSubscription: Subscription;

  constructor(public contratService: ContratTravailService) {
    this.contratService.getContratsFromServer();
  }

  ngOnInit() {
    this.contratsSubscription = this.contratService.contratsSubject.subscribe(
      (contrats: ContratTravail[])=>{
        this.contrats = contrats;
      }
    );
    
    this.contratService.emitContratsSubject();
  }

  onSave(){
    this.contratService.saveContratsToServer();
  }

  ngOnDestroy() {
    this.contratsSubscription.unsubscribe();
  }

}
