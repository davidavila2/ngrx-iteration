import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@workspace/core-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'davids-twenty-second-app';

  links = [
    { path: '/projects', icon: 'home', title: 'Home' },
    { path: '/login', icon: 'account_circle', title: 'Login' }
  ]

  constructor(private router: Router, public authService: AuthService) { }
  
  goLogin() {
    this.router.navigate(['/login']);
  }
}
