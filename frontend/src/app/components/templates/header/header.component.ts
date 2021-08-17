import { authService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: authService) { }
  menuShow = false;
  name = ''
  ngOnInit(): void {
    Emitters.nameProfile.subscribe((res)=>{
      this.name = res
    })
  }
  showMenu() {
    this.menuShow = !this.menuShow;
  }
  
  classContainerDisconected = {
    containerDisconected: true,
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
