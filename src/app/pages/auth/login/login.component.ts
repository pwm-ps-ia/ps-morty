import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  pepe = 'pepe';

  constructor(public auth: AuthService) {}

  login() {
    this.auth.login(
      this.loginForm.value.username || '',
      this.loginForm.value.password || ''
    );
  }
}
