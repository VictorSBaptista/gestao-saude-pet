import { Constants } from './constants';
import { User } from '../model/user';
import { Pet } from '../model/pet';

export class Shared {
  constructor() {}

  /**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.USERNAME_KEY) != null) {
      return;
    }
    if (localStorage.getItem(Constants.NAME_KEY) != null) {
      return;
    }

    //usuário definido na forma literal
    let user = new User(Constants.USERNAME_KEY, 'qwerty', true);
    let pet = new Pet(Constants.NAME_KEY, 'Canina', 'Pitbull', 'Fêmea');

    localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(user));
    localStorage.setItem(Constants.NAME_KEY, JSON.stringify(pet));
    localStorage.setItem(Constants.USERS_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.PETS_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.COSTS_KEY, String(0));
    localStorage.setItem(Constants.LOGGED_IN_KEY, String(false));

    localStorage.removeItem(Constants.DONATION_KEY);
    localStorage.setItem(Constants.DONATION_KEY, JSON.stringify([]));
  }
}
