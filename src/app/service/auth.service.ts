import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3130/api'
  
  constructor(private http: HttpClient, private router: Router) { }

  signup(usuario){
    return this.http.post<any>(this.url + '/registrar', usuario);
  }

  login(usuario){
    return this.http.post<any>(this.url + '/ingresar', usuario);
  }
}
