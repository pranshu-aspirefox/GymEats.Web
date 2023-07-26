import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  token:string = localStorage.getItem("jwt")?? '';
  private headers!: HttpHeaders;
  get apiUrl(): string {
      return environment.apiUrl;
    }

  constructor(private http:HttpClient,private router:Router) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
  }
  createNewSurvey(survey:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/api/Survey/AddSurvey`, survey,{headers:this.headers});
  }
  getServey():Observable<any>{
    return this.http.get(`${this.apiUrl}/api/Survey/GetSurvey`,{headers:this.headers});
  }

  updateServey(data:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/api/Survey/UpdateSurvey`,data,{headers:this.headers});
  }
  resetSurvey():Observable<any>
  {
    debugger
    return this.http.put(`${this.apiUrl}/api/Survey/ResetSurvey`,"",{headers:this.headers});
  }
}
