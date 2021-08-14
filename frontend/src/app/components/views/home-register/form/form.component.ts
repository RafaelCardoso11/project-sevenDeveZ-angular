import { Component, OnInit} from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
