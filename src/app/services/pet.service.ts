import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { ErrorUtil } from './../util/error-util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesAPI } from './../util/routes-api';
import { Pet } from './../model/pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getByName(name: string): Observable<Pet[]> {
    const query: HttpParams = new HttpParams().set('name', name);
    const options = name ? { params: query } : {};

    return this.httpClient.get<Pet[]>(`${RoutesAPI.PETS}`, options).pipe(
      //map((pets: Pet[])=>pets[0]),
      catchError(ErrorUtil.handleError)
    );
  }


  save(pet: Pet): Observable<Pet> {
    return this.httpClient.post<Pet>(
      `${RoutesAPI.PETS}`,
      pet,
      this.httpOptions
    );
  }

  patch(pet: Pet): Observable<Pet> {
    return this.httpClient.patch<Pet>(
      `${RoutesAPI.PETS}/${pet.id}`,
      pet,
      this.httpOptions
    );
  }

  update(pet: Pet): Observable<Pet> {
    return this.httpClient.put<Pet>(
      `${RoutesAPI.PETS}/${pet.id}`,
      pet,
      this.httpOptions
    );
  }
}
