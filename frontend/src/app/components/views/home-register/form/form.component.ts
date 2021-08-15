import { Router } from '@angular/router';

import { UserRegister } from '../../../../interfaces/userActions'
import { Component,  OnInit } from '@angular/core';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  user = <UserRegister>{
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
      class: {
        "form-control": true,
        "is-invalid": false,
        "is-valid": false
      },
      date: String
    },
    {
      name: 'Senha',
      placeholder: '******************',
      type: 'password',
      class: {
        "form-control": true,
        "is-invalid": false,
        "is-valid": false
      },
      date: String
    },
    {
      name: 'Email',
      placeholder: 'name@example.com',
      type: 'email',
      class: {
        "form-control": true,
        "is-invalid": false,
        "is-valid": false
      },
      date: String
    },
    {
      name: 'Telefone',
      placeholder: '(91) 9836-2202',
      type: 'text',
      class: {
        "form-control": true,
        "is-invalid": false,
        "is-valid": false
      },
      mask: '(00) 0 0000-0000',
      date: Number
    }
  ]

  politica = Boolean;

  constructor(private router: Router, private authService: authService) { }

  ngOnInit(): void{
  
  }
  
  ngOnChanges(): void {
   
  }
  validateLogin() {
        
      this.formContainer[0].class['is-invalid'] = true;
      this.formContainer[1].class['is-invalid'] = true;
      this.formContainer[2].class['is-invalid'] = true;
      this.formContainer[3].class['is-invalid'] = true;
      console.log(this.formContainer[1].class)

    // else{
    //   this.formContainer[0].class['is-valid'] = true;
    //   this.formContainer[1].class['is-valid'] = true;
    //   this.formContainer[2].class['is-valid'] = true;
    //   this.formContainer[3].class['is-valid'] = true;
    // }
  }

  insertUserToInterface() {
    this.user.name = String(this.formContainer[0].date)
    this.user.password = String(this.formContainer[1].date)
    this.user.email = String(this.formContainer[2].date)
    this.user.phone = Number(this.formContainer[3].date)
  }
  registerUser() {
    this.insertUserToInterface();
    this.validateLogin();
    this.authService.newUser(this.user).subscribe(()=> {
      this.router.navigate(['/login'])
    }, err => {
      console.log(err)
    })
  }
}
