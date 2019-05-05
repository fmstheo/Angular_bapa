import { Component, OnInit } from '@angular/core';
import { Conges } from '../../modeles/conges';
import { CongesService } from '../../services/conges.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-conges-exceptionnels',
  templateUrl: './conges-exceptionnels.component.html',
  styleUrls: ['./conges-exceptionnels.component.css']
})

export class CongesExceptionnelsComponent implements OnInit {

  congesExceptionnels:Conges= {
    id:0, idPersonnel:'', dateDebutConges:'',
    matin_amD:'', dateFinConges:'',
    matin_amF:'', dateRepriseEffective:'', 
    matin_amR:'', motifConges:''
    }

    isCertif:boolean;
    isValidFormSubmitted = false;
    isClick:boolean=false;
    motifCongesChoisi;
  
  

  constructor(public congesService:CongesService) {
    
  }
  
  ngOnInit() {

  }

  onClick(index,type){

    console.log('onClick(index,type) : ', index,type);
    this.isClick=!this.isClick;
    console.log(this.isClick);
  }

  onSelect(index, info) {
  
   console.log('onSelect(index, info) : ', index, info);
   this.motifCongesChoisi = info;
   console.log('this.motifCongesChoisi : ', this.motifCongesChoisi);
  }

  onSubmit(form:NgForm){

    this.isValidFormSubmitted=true;
    this.congesExceptionnels.dateDebutConges =form.value['dateDebutConges'];
    this.congesExceptionnels.matin_amD = form.value['matin_amD'];
    this.congesExceptionnels.dateFinConges = form.value['dateFinConges'];
    this.congesExceptionnels.matin_amF = form.value['matin_amF'];
    this.congesExceptionnels.dateRepriseEffective = form.value['dateRepriseEffective'];
    this.congesExceptionnels.matin_amR = form.value['matin_amR'];
    this.congesExceptionnels.motifConges = this.motifCongesChoisi=form.value['info'];
    this.isCertif = form.value['certif'];

    console.log(form);
    
    
  }
}
