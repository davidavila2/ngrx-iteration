import { Component } from '@angular/core';
import { AuthService } from '@workspace/core-data';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: '/projects', icon: 'home', title: 'Home' },
    { path: '/login', icon: 'person', title: 'Login' }
  ]

  constructor(public authService: AuthService) {}
}
