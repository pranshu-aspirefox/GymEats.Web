import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddQuestionReq } from '../interfaces/AddQuestionReq';
import { UpdateQuestionModel } from '../interfaces/UpdateQuestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  token:string = localStorage.getItem("jwt")?? '';
  private headers!: HttpHeaders;
  get apiUrl(): string {
      return environment.apiUrl;
    }
  constructor(private router: Router, private http: HttpClient) { 
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
      this.headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`)
  }
   getQuestionDetails(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/Question/GetQuestionList`,{headers: this.headers});
  }
  deleteQuestion(id:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/api/Question/DeleteQuestion/${id}`,{headers:this.headers});
  }
  getQuestionById(id:string):Observable<any>{
   return this.http.get<UpdateQuestionModel>(`${this.apiUrl}/api/Question/GetQuestionById/${id}`,{headers:this.headers})
  }
addNewQuestion(data:any):Observable<any>
{
  return this.http.post<any>(`${this.apiUrl}/api/Question/AddQuestion`,data,{headers:this.headers})
}
updateQuestion(data:any):Observable<any>
{
  return this.http.put<any>(`${this.apiUrl}/api/Question/UpdateQuestion`,data,{headers:this.headers})
}
}
