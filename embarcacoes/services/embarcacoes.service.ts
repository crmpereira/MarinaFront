import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Embarcacao } from '../model/embarcacao';
import {  first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmbarcacoesService {

  constructor(private HttpClient:HttpClient  ) { }

  //  private readonly API = 'api/embarcacoes'
   private readonly API = 'https://nkmarina-backend.onrender.com/api/embarcacoes'

  list() {
    return this.HttpClient.get<Embarcacao[]>(this.API)
    .pipe(
      first(),
      tap(embarcacao=>console.log(embarcacao))
    );
  }

  save(record: Partial<Embarcacao>)
  {
    console.log(record);
    ///return this.HttpClient.post<Embarcacao>(this.API,  record);
    if (record.id_embarc) {
      return this.update(record);
    }
      return this.create(record);
  }

  loadById(id_embarc: String ){
    return this.HttpClient.get<Embarcacao>(`${this.API}/${id_embarc}`);
  }

  private create(record: Partial<Embarcacao>){
    return this.HttpClient.post<Embarcacao>(this.API,  record);
  }

  private update(record: Partial<Embarcacao>){
     return this.HttpClient.post<Embarcacao>(this.API,  record);
    }

  remove(id_embarc: string){
    return this.HttpClient.delete(`${this.API}/${id_embarc}`);
   }

}

