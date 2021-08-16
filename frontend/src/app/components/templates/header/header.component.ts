import { authService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: authService) { }

  ngOnInit(): void {
  }
  menuShow = false;
  showMenu() {
    this.menuShow = !this.menuShow;
  }
  userAuthenticated = true;

  classContainerDisconected = {
    containerDisconected:true,
    active: false
  }
  disconnectUser() {
    let ContainerDisconected = document.querySelector('.containerDisconected')
    ContainerDisconected.classList.toggle('active')
    this.authService.disconnect();
    setTimeout(() => {
      ContainerDisconected.classList.remove('active')
    }, 2000);
  }
}
