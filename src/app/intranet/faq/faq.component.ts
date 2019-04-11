import { Component, OnInit } from '@angular/core';
import { FaqService } from '../services/faq.service';
import { Faq } from '../modeles/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  
  questionChoisie:Faq={
    id:0,
    question:'',
    description:'',
    note:0
  };

  constructor(public faqService:FaqService) { }

  ngOnInit() {
  }

  selectQuestion(index){
    console.log(index, this.faqService.faqListe[index]);
    this.questionChoisie = this.faqService.faqListe[index];
  }
}
