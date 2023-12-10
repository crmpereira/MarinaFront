import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Agenda } from '../model/agenda';
import { AgendaService } from '../service/agenda.service';


@Injectable({
        providedIn: 'root'
    })

   export class agendaResolver implements Resolve<Agenda> {

  constructor(private service: AgendaService){}

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Agenda>
  {
    if (route.params && route.params['id_agenda']) {
            return this.service.loadById(route.params['id_agenda']);
    }
  return of(...arguments,{id_agenda:'', dh_cadastro_agenda:'',  dh_solicit_agenda:'', situacao_agenda:'', cliente:[], embarcacao:[]});

  }

};


