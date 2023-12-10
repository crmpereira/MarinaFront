
export interface Agenda {
  id_agenda:string;
  dh_cadastro_agenda:string;
  dh_solicit_agenda:string;
  situacao_agenda:string;
  cliente: { id_cliente:string,
              nm_cliente:string };
  embarcacao: {id_embarc: string,
               nm_embarc:string };

}



