import { Router } from '@angular/router';

import { User } from './user'
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  user = <User>{
    name: '',
    password: '',
    email: '',
    phone: null
  }
  formContainer = [
    {
      name: 'Nome',
      placeholder: 'Samuel do Amor',
      type: 'text',
      date: String
    },
    {
      name: 'Senha',
      placeholder: '******************',
      type: 'password',
      date: String
    },
    {
      name: 'Email',
      placeholder: 'name@example.com',
      type: 'email',
      date: String
    },
    {
      name: 'Telefone',
      placeholder: '(91) 9836-2202',
      type: 'text',
      date: Number
    }
  ]


  constructor(private router: Router, private crudService: CrudService) { }

  ngOnInit(): void {

  }
  console() {

    this.formContainer.forEach(element => {
    console.log(element.date)
      
    });

  }
  createUser() {
    this.crudService.newUser(this.user).subscribe(()=>{
      this.router.navigate(['/login'])
    }, err =>{
      console.log(err)
    })
  }
}
