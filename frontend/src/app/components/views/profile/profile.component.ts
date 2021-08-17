import { authService } from 'src/app/services/auth.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user = {
  createdAt: "",
  email: "",
  name: "",
  phone: "",
  updatedAt: "",
}
token = window.localStorage.getItem('bearer token')
constructor(private authService: authService) { }

ngOnInit(): void {
  this.authService.userAuthenticated(this.token).subscribe(user => {
    console.log(user['User'].name)
    this.user.name = user['User'].name
  })
}


}
