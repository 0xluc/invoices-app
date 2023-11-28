export class Demand {
  _id?: string;
  descricao?: string;
  data_cadastro?: Date;
  solicitado_por?: string;
  valor?: number;
  status?: boolean;
  cliente: Client;
}

export class Client {
  _id?: string;
  nome?: string;
}
