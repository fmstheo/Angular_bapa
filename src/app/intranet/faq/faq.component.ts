import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(public faqService:FaqService) { }

  ngOnInit() {
  }

}
