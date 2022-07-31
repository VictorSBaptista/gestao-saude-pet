export class Pet {
  id!: string;
  name: string;
  tipo: string;
  raca: string;
  sexo: string;
  birthday?: Date;

  constructor(name: string, tipo: string, raca: string, sexo: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.name = name;
    this.tipo = tipo;
    this.raca = raca;
    this.sexo = sexo;
  }

  public static clone(pet: Pet) {
    let p: Pet = new Pet(pet.name, pet.tipo, pet.raca, pet.sexo);
    p.name = pet.name;
    p.tipo = pet.tipo;
    p.raca = pet.raca;
    p.sexo = pet.sexo;
    p.birthday = pet.birthday;

    return p;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param pet
   * @returns
   */
  public static toWS(pet: Pet) {
    let p: Pet = new Pet(pet.name, pet.tipo, pet.raca, pet.sexo);
    p.name = pet.name;
    p.tipo = pet.tipo;
    p.raca = pet.raca;
    p.sexo = pet.sexo;
    p.birthday = pet.birthday;
    return p;
  }
}
