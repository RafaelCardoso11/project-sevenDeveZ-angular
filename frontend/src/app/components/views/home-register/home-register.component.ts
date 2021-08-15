import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-register',
  templateUrl: './home-register.component.html',
  styleUrls: ['./home-register.component.scss']
})
export class HomeRegisterComponent implements OnInit {

  constructor() { }
  userAuthenticated = false;
  ngOnInit(): void {
  }

}
