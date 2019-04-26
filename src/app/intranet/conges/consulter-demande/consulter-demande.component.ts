import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { StagiaireService } from '../../services/stagiaire.service';

@Component({
  selector: 'app-consulter-demande',
  templateUrl: './consulter-demande.component.html',
  styleUrls: ['./consulter-demande.component.css']
})
export class ConsulterDemandeComponent implements OnInit {

  constructor(public data:ChatService, public datastagiaire: StagiaireService) { }
  ngOnInit() {
  }
}
