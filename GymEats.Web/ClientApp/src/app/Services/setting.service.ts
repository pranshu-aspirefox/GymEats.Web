import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpdateMarkUpSetting } from '../interfaces/UpdateMarkupSetting';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  updateData : UpdateMarkUpSetting = new Object as UpdateMarkUpSetting;
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
  getSettinglist(data:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/Setting/GetRecordBykeyName/${data}`,{headers: this.headers});
  }

  updateMrkup(data:any):Observable<any>{
    this.updateData.key = data.key;
    this.updateData.value = `${data.value}`;
    return this.http.put(`${this.apiUrl}/api/Setting/UpdateRecord?id=${data.id}`,this.updateData,{headers:this.headers});
  }
}
