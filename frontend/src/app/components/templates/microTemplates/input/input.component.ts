import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/components/views/home-register/form/user';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  
    @Input() name = ''
    @Input() type = ''
    @Input() placeHolder = ''  

    user = <User> {
      name: 'asddas',
      password: '',
      email:'',
      phone: null
    }

  constructor() {
  }


  ngOnInit(): void {
  }

}
