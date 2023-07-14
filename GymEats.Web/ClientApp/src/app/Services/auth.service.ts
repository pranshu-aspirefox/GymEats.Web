import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginModel } from '../interfaces/login';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";
import jwt_decode from 'jwt-decode';
import { AuthenticatedResponse } from '../interfaces/AuthenticatedResponce';
import { ForgetPasswordModel } from '../interfaces/ForgetPasswordModel';
import { ResetPasswordModel } from '../interfaces/ResetPasswordModel';
import { ChangePasswordModel } from '../interfaces/ChangePasswordModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get apiUrl(): string {
    return environment.apiUrl;
  }
  private headers!: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  }

  loginUser(credentials: LoginModel): Observable<any> {
    return this.http.post<AuthenticatedResponse>(`${this.apiUrl}/api/Auth/login`, credentials,{headers:this.headers});
  }
  
  get loginRequired(): boolean {
    var token = localStorage.getItem("jwt");
    if (token == null) {
      return true;
    }
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token!);
    return isExpired ? true : false;
  }
  getRole() {
    var validToken = localStorage.getItem("jwt");
    if (validToken == null) {
      return false;
    }
    const decodeToken: any = jwt_decode(validToken);
    return decodeToken["role"];
  }
  forgetPassword(credentials: ForgetPasswordModel): Observable<any> {
    return this.http.post<AuthenticatedResponse>(`${this.apiUrl}/api/Auth/request-pass`, credentials, { 'headers': this.headers });
  }
  resetPassword(credentials: ResetPasswordModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/reset-pass`, credentials, { 'headers': this.headers });
  }
  changePassword(credentials: ChangePasswordModel): Observable<any> {
    var accessToken = localStorage.getItem("jwt")?? '';
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + accessToken);
    return this.http.post<AuthenticatedResponse>(`${this.apiUrl}/api/Auth/ChangePassword`, credentials, { 'headers': this.headers });
  }

}


