import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn = false;

  constructor() {}

  public login(username: string, password: string): boolean {
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }
}
