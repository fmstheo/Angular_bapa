import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {catchError} from "rxjs/internal/operators";
import { TokenService } from './token.service';

@Injectable()
export class AuthIntercepteur implements HttpInterceptor{
  /**
   * Interepteur qui ajouter un token d'identification à chaque requête HTTP sortante
   * L'intercepteur clone un requête, transforme la requête clonée et l'envoie
   */
  constructor(public securite:TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interception d'une requête ... ");
    // Cloner la requête
    const authReq = req.clone(
      { headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+this.securite.token
      })
    });
    console.log("La requête va être envoyée avec un nouveau header intégrant une autorisation...");
    // Envoyer la nouvelle requête
    return next.handle(authReq)
    .pipe(
      catchError((erreur) => {
        console.log("Une erreur s'est produite");
        console.log(erreur); // Récupérer les erreurs et les affichers
        return Observable.throw(erreur); // Renvoyer l'erreur
    })) as any;
  }
}