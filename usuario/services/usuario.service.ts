import { Usuario } from '../model/usuario';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  [x: string]: any;

  constructor(private HttpClient:HttpClient  ) { }

  // private readonly API = 'api/usuario'
  private readonly API = 'https://nkmarina-backend.onrender.com/api/usuario'

  list() {
    return this.HttpClient.get<Usuario[]>(this.API)
    .pipe(
      first(),
      tap(usuario=>console.log(usuario))
    );
  }



  remove(id_user: string){
    return this.HttpClient.delete(`${this.API}/${id_user}`);
   }


   save(record: Partial<Usuario>)
   {
     console.log(record);

     if (record.id_user) {
       return this.update(record);
     }
       return this.create(record);

   }

   loadById(id_user: string ){
     return this.HttpClient.get<Usuario>(`${this.API}/${id_user}`);
   }

   private create(record: Partial<Usuario>){
     return this.HttpClient.post<Usuario>(this.API,record);
   }

   private update(record: Partial<Usuario>){
      return this.HttpClient.post<Usuario>(this.API,record);
     }




}
