import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AuthService } from '@workspace/core-data';

@Component({
  selector: 'workspace-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;
  @Input() sidenav: MatSidenav;
  @Input() isAuthenticated: boolean

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
