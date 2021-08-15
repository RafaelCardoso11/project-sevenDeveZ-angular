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
  userAuthenticated = true

  disconnectUser() {
    this.authService.disconnect();
  }
}
