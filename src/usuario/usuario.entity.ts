export class UsuarioEntity {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public senha: string,
  ) {}
}
