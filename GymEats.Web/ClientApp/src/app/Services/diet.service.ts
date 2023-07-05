import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
}
