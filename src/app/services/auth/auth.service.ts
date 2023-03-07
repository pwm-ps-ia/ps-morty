import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  token: string | null = null;

  login(username: string, password: string) {
    console.log(username, password);
    this.token = 'abc';
  }
}
