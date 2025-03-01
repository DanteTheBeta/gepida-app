/*
* File: login.component.ts
* Author: Katonás Péter
* Copyright: 2025, Katonás Péter
* Group: SZOFT II/2/E
* Date: 2025-03-01
* Github: https://github.com/DanteTheBeta/gepida-app.git
* Licenc: GNU GPL
*/


import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/bikes']),
      error: () => (this.errorMessage = 'Hibás felhasználónév vagy jelszó'),
    });
  }
}