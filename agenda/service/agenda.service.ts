import { Agenda } from './../model/agenda';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient ) { }

  //private readonly API = 'api/agenda'
  private readonly API = 'https://nkmarina-backend.onrender.com/api/agenda'

  list() {
    return this.http.get<Agenda[]>(this.API)
    .pipe(
      first(),
      tap(agenda=>console.log(agenda))
    );
  }


  save(record: Partial<Agenda>)
  {
    console.log(record);
    if (record.id_agenda) {
      return this.update(record);
    }
      return this.create(record);

  }


  loadById(id_agenda: string ){
    return this.http.get<Agenda>(`${this.API}/${id_agenda}`);
  }

  private create(record: Partial<Agenda>){
    return this.http.post<Agenda>(this.API,record);
  }

  private update(record: Partial<Agenda>){
     return this.http.post<Agenda>(this.API,record);
    }



  remove(id_cliente: string){
    return this.http.delete(`${this.API}/${id_cliente}`);
   }




}
