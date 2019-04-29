import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContratTravailService } from '../services/contrat-travail.service';
import { ContratTravail } from '../modeles/contrat-travail';
import { Subscription } from 'rxjs';
// pour gérer les animations d'apparition/disparition des inputs de modifications
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-contrat-travail',
  templateUrl: './contrat-travail.component.html',
  styleUrls: ['./contrat-travail.component.css'],
  animations: [
    trigger('animInput', [
      state('close', style({
        opacity: 0,
        display: 'none'
      })),
      state('open', style({
        opacity: 1,
        display: ''
      })),
      transition('close => open', animate('0.6s 0.8s ease-in')),
      transition('open => close', animate('0.2s  ease')),
    ])
  ]
})
export class ContratTravailComponent implements OnInit, OnDestroy {

  idModif: number;
  isOpen = false;
  contrats: ContratTravail[];
  contratsSubscription: Subscription;

  constructor(private contratService: ContratTravailService) {}

  ngOnInit() {
    // on récupère les contrats de firebase
    this.contratService.getContratsFromServer();

    // on assigne cette récupèration à 'contrats'
    this.contratsSubscription = this.contratService.contratsSubject.subscribe(
      (contrats: ContratTravail[])=>{
        this.contrats = contrats;
      }
    );
    
    this.contratService.emitContratsSubject();
  }

  /**
   * permet la sauvegarde des données dans firebase grâce à la méthode définie dans le service
   */
  onSave(){
    this.contratService.saveContratsToServer();
    this.isOpen = false;
  }

  /**
   * méthode gérant l'ouverture/fermeture des lignes d'input (selon id et flag isOpen)
   * @param id 
   */
  onModifier(id: number): void {
    this.idModif = this.isOpen ? this.idModif : -1;
    this.isOpen = this.idModif === id ? false : true ;
    this.idModif = id;
  }

  /**
   * méthode s'exécutant à la destruction du componant;
   * à sa destruction, on désouscprit 'contratSubscription'
   */
  ngOnDestroy() {
    this.contratsSubscription.unsubscribe();
  }

}
