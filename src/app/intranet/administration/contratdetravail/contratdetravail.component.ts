import { Component, OnInit } from '@angular/core';
import { DevjuniorService } from 'src/app/services/devjunior.service';

@Component({
  selector: 'app-contratdetravail',
  templateUrl: './contratdetravail.component.html',
  styleUrls: ['./contratdetravail.component.css']
})
export class ContratdetravailComponent implements OnInit {

  constructor(public data:DevjuniorService) { }

  ngOnInit() {
  }

}
