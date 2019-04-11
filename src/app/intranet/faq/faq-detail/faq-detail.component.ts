import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Faq } from '../../modeles/faq';
import { FaqService } from '../../services/faq.service';

@Component({
  selector: 'app-faq-detail',
  templateUrl: './faq-detail.component.html',
  styleUrls: ['./faq-detail.component.css']
})
export class FaqDetailComponent implements OnInit {

  idFaq:number;
  questionActuelle:Faq={
    id:0,
    question:'',
    description:'',
    note:0
  };

  constructor(private maRoute:ActivatedRoute, public questions:FaqService) { }

  ngOnInit() {
    this.maRoute.params.subscribe(
      bertrandDansFMSPourPasDonnerUnNomQuiPorteAConfusion => {
        this.idFaq = bertrandDansFMSPourPasDonnerUnNomQuiPorteAConfusion['bertrand'];
        console.log(bertrandDansFMSPourPasDonnerUnNomQuiPorteAConfusion['bertrand']);
        /**
         * On récupère la question correspondant à l'index (Bertrand) transféré via l'URL dans le tableau des questions dans le service FaqService
         */
        this.questionActuelle = this.questions.faqListe[this.idFaq];
    });
  }

}
