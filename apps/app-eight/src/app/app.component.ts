import { Component } from '@angular/core';
import { AuthService } from '@workspace/core-data';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SuperSmashBros';

  links = [
    { path: '/projects', icon: 'home', title: 'Projects' }
  ];
  constructor(public authService: AuthService) {}
}
