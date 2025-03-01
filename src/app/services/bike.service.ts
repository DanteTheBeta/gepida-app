/*
* File: bike.service.ts
* Author: Katonás Péter
* Copyright: 2025, Katonás Péter
* Group: SZOFT II/2/E
* Date: 2025-03-01
* Github: https://github.com/DanteTheBeta/gepida-app.git
* Licenc: GNU GPL
*/





import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  private apiUrl = 'http://localhost:3000/bikes';

  constructor(private http: HttpClient, private authService: AuthService) {}

  addBike(bike: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(this.apiUrl, bike, { headers });
  }
}
