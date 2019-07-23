import { Component } from '@angular/core';
import { AuthService } from '@workspace/core-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel';

  links = [
    { path: '/projects', icon: 'home', title: 'Projects' },
    { path: '/login', icon: 'account_circle', title: 'Login' },
  ]

  constructor(public authService: AuthService) {}
}
