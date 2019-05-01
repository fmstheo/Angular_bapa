import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { catchError } from "rxjs/internal/operators";
import { TokenService } from './token.service';

@Injectable()
export class SecuriteIntercepteur implements HttpInterceptor {

  constructor(public securite: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((erreur) => {
          if (erreur instanceof HttpErrorResponse && erreur.status == 401) {
            this.securite.token = '';
            console.log("Une erreur s'est produite");
            console.log(erreur); // Récupérer les erreurs et les affichers
          }
          return Observable.throw(erreur); // Retourner l'erreur dans tous les cas
        })) as any;
  }
}