import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss']
})
export class HomeLoginComponent implements OnInit {
  formContainer = [
    {
      name: 'Nome',
      placeholder: 'Samuel do Amor',
      type: 'text'
    },
    {
      name: 'Senha',
      placeholder: '******************',
      type: 'password'
    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateTo(){
    this.router.navigate(['/perguntas'])
  }
}
