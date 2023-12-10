import { CheckList } from '../model/checklist';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckListService {

  constructor(private http: HttpClient ) { }

    ///private readonly API = 'api/checklist'
    private readonly API = 'https://nkmarina-backend.onrender.com/api/checklist'

  list() {
    return this.http.get<CheckList[]>(this.API)
    .pipe(
      first(),
      tap(checklist=>console.log(checklist))
    );
  }

  save(record: Partial<CheckList>)
  {
    console.log(record);

    if (record.id_check) {
      return this.update(record);
    }
      return this.create(record);

  }

  loadById(id_check: string ){
    return this.http.get<CheckList>(`${this.API}/${id_check}`);
  }

  private create(record: Partial<CheckList>){
    return this.http.post<CheckList>(this.API,record);
  }

  private update(record: Partial<CheckList>){
     return this.http.post<CheckList>(this.API,record);
    }



  remove(id_check: string){
    return this.http.delete(`${this.API}/${id_check}`);
   }

}

