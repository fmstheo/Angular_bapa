import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;
import { Personnel } from '../intranet/modeles/personnel';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:80";
  //cheminAPI = "/Angular/BapaGit/Angular_bapa/API"; // home
  
  cheminAPI = "/bapaWeb/API"; // pulseo
  personnel:Personnel;

  constructor(private httpClient: HttpClient) {}

  readPersonnel(): Observable<Personnel[]>{
    return this.httpClient.get<Personnel[]>(`${this.PHP_API_SERVER}${this.cheminAPI}/read.php`);
  }

  createPersonnel(personnel: Personnel): Observable<Personnel[]>{
    return this.httpClient.post<Personnel[]>(`${this.PHP_API_SERVER}/api/create.php`, personnel);
  }

  updatePersonnel(personnel: Personnel){
    return this.httpClient.put<Personnel[]>(`${this.PHP_API_SERVER}/api/update.php`, personnel);
  }

  deletePersonnel(id: number){
    return this.httpClient.delete<Personnel>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }
}
