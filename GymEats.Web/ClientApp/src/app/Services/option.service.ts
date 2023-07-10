import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetOptionList } from '../interfaces/OptionModel';
import { AddNewOption } from '../interfaces/AddOption';
import { UpdateOptionModal } from '../interfaces/UpdateUption';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
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
  getOptionList(): Observable<any> {
    return this.http.get<GetOptionList>(`${this.apiUrl}/api/Option/GetOptionList`,{headers: this.headers});
  }
  addNewOption(data:AddNewOption):Observable<any>
  {
    return this.http.post<AddNewOption>(`${this.apiUrl}/api/Option/AddOption`,data,{headers: this.headers})
  }
  getOptionById(id:string):Observable<any>{
    debugger
    return this.http.get<UpdateOptionModal>(`${this.apiUrl}/api/Option/GetOptionById/${id}`,{headers:this.headers})
   }
  deleteOption(id:string):Observable<any>
  {
    debugger
    return this.http.delete(`${this.apiUrl}/api/Option/DeleteOption/${id}`,{headers:this.headers})
  }
  updateOption(data:any):Observable<any>
{
  return this.http.put<any>(`${this.apiUrl}/api/Option/UpdateOption`,data,{headers:this.headers})
}
}
