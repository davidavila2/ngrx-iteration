import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {
    this.setToken(this.getToken());
  }

  getToken() {
    return localStorage.getItem('token')
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.isAuthenticated$.next(token !== '');
  }

  logout() {
    this.setToken('');
    this.router.navigate(['/login']);
  }

  login(loginCredentials: {username: string, password: string, app_name: string}) {
    const url = 'https://levelup-authenticated-api.herokuapp.com/auth/login';

    return this.httpClient.post(url, loginCredentials).pipe(
      tap((res: { access_token: string }) => this.setToken(res.access_token)),
      tap(_ => this.router.navigate([`/${loginCredentials.app_name}`]))
    ).subscribe();
  }
}