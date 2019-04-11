import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token:string="FMS SANS GREG";
  admin:number=2;
  
  constructor() { }
}
