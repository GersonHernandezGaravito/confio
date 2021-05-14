import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = {
    nombreU: '',
    contrasena: ''
  };
  error = '';

  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.usuario)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('rol', res.rol);
        this.router.navigate(['/tabs']);
      },
      
      err => {
        console.log(err.error);
        this.error= err;
      }
      )
  }
}
