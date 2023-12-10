import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Cliente } from '../model/clientes';
import { ClientesService } from '../services/clientes.service';


@Injectable({
        providedIn: 'root'
    })

   export class clienteResolver implements Resolve<Cliente> {

  constructor(private service: ClientesService){}

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente>
  {
    if (route.params && route.params['id_cliente']) {
            return this.service.loadById(route.params['id_cliente']);
    }
  return of(...arguments,{id_cliente:'', nm_cliente:'',  end_cliente:'', tel_cliente:'', email_cliente:'', embarcacoes: [] });

  }

};
