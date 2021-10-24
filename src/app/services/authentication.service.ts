import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,NgZone } from '@angular/core';
import {User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public host:string = "https://authenticationservice-ayoub9819.cloud.okteto.net";
  httpHeader = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  register(data: User):Observable<any>{
    return this.http.post<any>(this.host+"/add-user",data);
  }
  login(data : User):Observable<any> {
    return this.http.post<any>(this.host+"/login",data);
  }
  logout(){
    localStorage.removeItem('token');
  }
}
