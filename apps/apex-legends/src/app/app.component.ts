import { Component } from '@angular/core';
import { AuthService } from '@workspace/core-data';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Apex Legends Characters';

  links = [
    { path: '/apex', icon: 'home', title: 'Apex' }
  ];

  constructor(public authService: AuthService) {}
}
