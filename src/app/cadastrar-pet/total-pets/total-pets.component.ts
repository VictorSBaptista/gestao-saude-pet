import { Component, OnChanges, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { PetStorageService } from '../cadastrar-pet-storage.service';

@Component({
  selector: 'app-total-pets',
  templateUrl: './total-pets.component.html',
  styleUrls: ['./total-pets.component.css'],
})
export class TotalPetsComponent implements OnInit {
  value: number = 0;
  subscription: Subscription;

  constructor(private petService: PetStorageService) {
    this.subscription = this.petService.asObservable().subscribe(
      (data) => {
        this.value = data;
      },
      (error) => {},
      () => {
        //alert('Complete!');
      }
    );
  }

  ngOnInit(): void {
    this.value = this.petService.getPets()?.length;
  }
}
