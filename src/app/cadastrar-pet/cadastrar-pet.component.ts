import { Component, OnInit, ViewChild } from '@angular/core';

import { Constants } from 'src/app/util/constants';
import { NgForm } from '@angular/forms';
import { Shared } from '../util/shared';
import { Pet } from './../model/pet';
import { PetStorageService } from './cadastrar-pet-storage.service';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Component({
  selector: 'app-cadastrar-pet',
  templateUrl: './cadastrar-pet.component.html',
  styleUrls: ['./cadastrar-pet.component.css']
})
export class CadastrarPetComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  pet!: Pet;
  pets?: Pet[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private petService: PetStorageService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.pet = new Pet('', '', '', '');
    this.pets = this.petService.getPets();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.petService.isExist(this.pet.name)) {
      this.petService.save(this.pet);
    } else {
      this.petService.update(this.pet);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.pet = new Pet('', '', '', '');

    this.pets = this.petService.getPets();

    this.petService.notifyTotalPets();
  }

  /**
   * Realiza o clone do objeto, justamente para não refletir as mudanças
   * imediatamente na lista de usuários cadastrados sem pressionar o submit.
   * @param pet
   */
  onEdit(pet: Pet) {
    //this.pet = pet;
    let clone = Pet.clone(pet);
    this.pet = clone;
  }

  onDelete(name: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + name
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.petService.delete(name);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Opps! O item não pode ser removido!';
    }
    this.pets = this.petService.getPets();
    this.petService.notifyTotalPets();
  }
}
