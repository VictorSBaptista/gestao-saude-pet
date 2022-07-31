import { BehaviorSubject, Observable } from 'rxjs';

import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Pet } from '../model/pet';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable()
export class PetStorageService {
  pets!: Pet[];
  private petSource!: BehaviorSubject<number>;
  constructor() {
    this.pets = WebStorageUtil.get(Constants.PETS_KEY);
    this.petSource = new BehaviorSubject<number>(this.pets.length);
  }

  save(pet: Pet) {
    this.pets = WebStorageUtil.get(Constants.PETS_KEY);
    this.pets.push(pet);
    WebStorageUtil.set(Constants.PETS_KEY, this.pets);
  }

  update(pet: Pet) {
    this.pets = WebStorageUtil.get(Constants.PETS_KEY);
    this.delete(pet.name);
    this.save(pet);
  }

  delete(name: string): boolean {
    this.pets = WebStorageUtil.get(Constants.PETS_KEY);
    this.pets = this.pets.filter((p) => {
      return p.name?.valueOf() != name?.valueOf();
    });

    WebStorageUtil.set(Constants.PETS_KEY, this.pets);
    return true;
  }

  isExist(value: string): boolean {
    this.pets = WebStorageUtil.get(Constants.PETS_KEY);
    for (let p of this.pets) {
      if (p.name?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getPets(): Pet[] {
    this.pets = WebStorageUtil.get(Constants.PETS_KEY);
    return this.pets;
  }

  notifyTotalPets() {
    this.petSource.next(this.getPets()?.length);
    // if (this.getPets()?.length > 1) {
    //   this.petSource.complete();
    // }
  }

  asObservable(): Observable<number> {
    return this.petSource;
    //return this.petSource.asObservable()
  }
}
