import { Embarcacao } from "./embarcacao_cli";

export interface Cliente {
  id_cliente:string;
  nm_cliente:string;
  end_cliente:string;
  tel_cliente:string;
  email_cliente:string;
  embarcacoes?: Embarcacao[];
}
