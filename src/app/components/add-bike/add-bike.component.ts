/*
* File: add.bike.component.ts
* Author: Katonás Péter
* Copyright: 2025, Katonás Péter
* Group: SZOFT II/2/E
* Date: 2025-03-01
* Github: https://github.com/DanteTheBeta/gepida-app.git
* Licenc: GNU GPL
*/


import { Component } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css'],
})
export class AddBikeComponent {
  bike = { name: '', type: '', price: 0 };

  constructor(private bikeService: BikeService) {}

  addBike(): void {
    this.bikeService.addBike(this.bike).subscribe({
      next: () => alert('Sikeres mentés!'),
      error: () => alert('Hiba történt.'),
    });
  }
}
