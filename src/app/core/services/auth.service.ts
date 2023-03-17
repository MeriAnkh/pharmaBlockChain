import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
  private token!: string;
  private apiPatientUrl  = environment.apiUrl

  constructor (private http: HttpClient) {}
  
  getToken(): string {
    return this.token;
  }

  initToken(token: string){
    this.token = token;
  }

  login(patient : {email: string, password : string}): Observable<any> {
    return this.http.post<string>(`${this.apiPatientUrl}/signIn`, patient)
  }
  
}