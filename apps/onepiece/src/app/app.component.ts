import { Component } from '@angular/core';
import { AuthService } from '@workspace/core-data';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onepiece';

  links = [
    { path: '/projects', icon: 'home', title: 'Projects' },
    { path: '/login', icon: 'account_circle', title: 'Login' },
  ]

  constructor(public authService: AuthService) {}
}
