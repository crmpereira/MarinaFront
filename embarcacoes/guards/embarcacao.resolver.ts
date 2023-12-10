import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Embarcacao } from '../model/embarcacao';
import { EmbarcacoesService } from '../services/embarcacoes.service';


@Injectable({providedIn: 'root'})

export class embarcacaoResolver implements Resolve<Embarcacao> {

  constructor(private service: EmbarcacoesService){}


  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Embarcacao>
  {
    if (route.params) {
            return this.service.loadById(route.params['id_embarc']);
    }
  return of(...arguments,{id_embarc:'', nm_embarc:'',  tipo_embarc:'',  nrmarinha_embarc:'', cliente_id:''});

  }

};
