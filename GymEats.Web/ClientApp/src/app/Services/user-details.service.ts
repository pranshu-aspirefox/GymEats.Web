import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '../interfaces/UserDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  token: string = localStorage.getItem('jwt')??'';
  private headers!:HttpHeaders;
  get apiUrl(): string{
    return environment.apiUrl;
  }

  constructor(private http: HttpClient) 
  {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
  }

  getUserDetails() : Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}/api/Auth/GetUserList`,{headers: this.headers});
  }
}
