import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  usuario = {
    nombreU: '',
    correo: '',
    contrasena: '',
    intentos: '10'
  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(){
    
    this.authService.signup(this.usuario)
    .subscribe(
      res => {
        console.log(res)
        //Se puede guardar en Cookies
        localStorage.setItem('token', res.token);
        localStorage.setItem('rol', res.rol);
        
        this.router.navigate(['/tabs'])
      },
      err => console.log(err)
    )
  }
}
