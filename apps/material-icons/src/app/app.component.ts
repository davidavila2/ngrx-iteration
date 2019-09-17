import { Component } from '@angular/core';
import { AuthService } from '@workspace/core-data';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Material-Icons';

  links = [
    { path: '/icons', icon: 'home', title: 'Home' },
  ]

  constructor(public authService: AuthService) {}
}
