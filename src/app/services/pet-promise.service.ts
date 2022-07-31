import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Pet } from '../model/pet';

@Injectable({
  providedIn: 'root',
})
export class PetPromiseService {
  URL = 'http://localhost:3000/pets';
  URL_PT = 'http://localhost:3000/cadastrar-pet';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getByName(name: string): Promise<Pet[]> {
    return this.httpClient.get<Pet[]>(`${this.URL_PT}/${name}`).toPromise();
  }

  save(pet: Pet): Promise<Pet> {
    return this.httpClient
      .post<Pet>(this.URL, JSON.stringify(pet), this.httpOptions)
      .toPromise();
  }

  patch(pet: Pet): Promise<Pet> {
    return this.httpClient
      .patch<Pet>(
        `${this.URL}/${pet.id}`,
        JSON.stringify(pet),
        this.httpOptions
      )
      .toPromise();
  }

  update(pet: Pet): Promise<Pet> {
    return this.httpClient
      .put<Pet>(
        `${this.URL}/${pet.id}`,
        JSON.stringify(pet),
        this.httpOptions
      )
      .toPromise();
  }
}
