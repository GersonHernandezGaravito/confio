import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlAuth = 'http://localhost:3130/auth'
  
  constructor(private http: HttpClient, private router: Router) { }

  signup(usuario){
    return this.http.post<any>(this.urlAuth + '/registrar', usuario);
  }

  login(usuario){
    return this.http.post<any>(this.urlAuth + '/ingresar', usuario);
  }
}
