import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { patient } from "../models/users/patient.model";

@Injectable({
  providedIn: 'root'
})

export class signUpFormService {


  constructor(private http: HttpClient) {}

  saveUserInfo(patient: patient): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users`, patient)
  }

}