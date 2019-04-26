import { Component, OnInit } from '@angular/core';
import { DevemployeService } from 'src/app/services/devemploye.service';

@Component({
  selector: 'app-contratdetravail',
  templateUrl: './contratdetravail.component.html',
  styleUrls: ['./contratdetravail.component.css']
})
export class ContratdetravailComponent implements OnInit {

  constructor(public data:DevemployeService) { }

  ngOnInit() {
  }

}
