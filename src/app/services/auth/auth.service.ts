import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ApiConfig } from 'src/app/api/config';
import { BareaerTokenAuth } from 'src/app/types/db/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  token: string | null = null;

  login(email: string, password: string) {
    return this.http
      .post<BareaerTokenAuth>(ApiConfig.url + '/auth/bareaer-token/', {
        username: email,
        password: password,
      })
      .pipe(tap((response) => (this.token = response.token)));
  }
}
