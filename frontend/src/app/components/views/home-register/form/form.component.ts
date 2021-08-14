import {User} from './user'
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
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
    },
    {
      name: 'Email',
      placeholder: 'name@example.com',
      type: 'email'
    },
    {
      name: 'Telefone',
      placeholder: '(91) 9836-2202',
      type: 'text'
    }
  ]
  @Input() user: User = {
    name: 'asddas',
    password: '',
    email:'',
    phone: null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
