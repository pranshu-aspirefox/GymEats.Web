import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddNewDietModel } from '../interfaces/AddNewDiet';
import { UpdateDietModal } from '../interfaces/updateDiet';

@Injectable({
  providedIn: 'root'
})
export class DietService {
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
  getDietList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/Diet/GetDietList`,{headers: this.headers});
  }
  // addDiet(diet:AddNewDietModel):Observable<any>
  // {
  //   debugger;
  //   return this.http.post(`${this.apiUrl}/api/Diet/AddNewDiet`,diet,{headers:this.headers})
  // }
  addNewDiet(data:AddNewDietModel):Observable<any>
{
  debugger;
  return this.http.post<any>(`${this.apiUrl}/api/Diet/AddNewDiet`,data,{headers:this.headers})
}
getDietById(id:string):Observable<any>{
 return this.http.get<UpdateDietModal>(`${this.apiUrl}/api/Diet/GetDietById/${id}`,{headers:this.headers})
}
updateDiet(data:any):Observable<any>
{
  return this.http.put<any>(`${this.apiUrl}/api/Diet/UpdateDiet`,data,{headers:this.headers})
}
deleteDiet(id:string):Observable<any>
{
  return this.http.delete(`${this.apiUrl}/api/Diet/RemoveDiet/${id}`,{headers:this.headers})
}
}
