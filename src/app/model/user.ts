import { Transaction } from './transaction';

export class User {
  id!: string;

  username: string;
  password: string;
  cpf?: string;
  birthday?: Date;
  balance: number;
  isAdmin: boolean;
  transactions: Transaction[];
  name?: string;
  tipo?: string;
  raca?: string;
  sexo?: string;
  constructor(username: string, password: string, isAdmin: boolean = false) {
    this.id = String(Math.round(Math.random() * 1000));
    this.username = username;
    this.password = password;
    this.balance = 0;
    this.transactions = [];
    this.isAdmin = isAdmin;
    this.tipo = '';
    this.raca = '';
    this.sexo = '';
  }

  public static clone(user: User) {
    let u: User = new User(user.username, user.password, user.isAdmin);
    u.tipo = user.tipo;
    u.raca = user.raca;
    u.birthday = user.birthday;
    u.sexo = user.sexo;
    return u;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param user
   * @returns
   */
  public static toWS(user: User) {
    let u: User = new User(user.username, user.password, user.isAdmin);
    u.tipo = user.tipo;
    u.raca = user.raca;
    u.birthday = user.birthday;
    u.sexo = user.sexo;
    return u;
  }
}
