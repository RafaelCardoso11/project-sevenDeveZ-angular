import { authService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/interfaces/userActions';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss']
})
export class HomeLoginComponent implements OnInit {
  user = <UserLogin>{
    email: '',
    password: ''
  }

  formContainer = [
    {
      name: 'Email',
      placeholder: 'Exemplo@sevendevz.com',
      type: 'email',
      class: {
        "form-control": true,
        "is-invalid": false,
        "is-valid": true
      },
      date: '',
      valid: ''
    },
    {
      name: 'Senha',
      placeholder: '******************',
      type: 'password',
      class: {
        "form-control": true,
        "is-invalid": false,
        "is-valid": true
      },
      date: '',
      valid: ''
    }
  ]
  constructor(
    private router: Router,
    private authService: authService,

  ) { }

  ngOnInit(): void {

  }
  insertUserToInterface() {
    this.user.email = String(this.formContainer[0].date)
    this.user.password = String(this.formContainer[1].date)
  }
  loginUser() {
    this.insertUserToInterface();
    this.authService.joinUser(this.user).subscribe((user) => {
      this.router.navigate(['/']);
      localStorage.setItem("bearer token", String(user.Token))
    }, err => {
      console.log(err)
      this.formContainer[0].valid = String(err.error.message)
    })
  }
}
