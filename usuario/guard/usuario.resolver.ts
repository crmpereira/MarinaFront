import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { UsuarioService } from '../services/usuario.service';


@Injectable({
        providedIn: 'root'
    })

   export class usuarioResolver implements Resolve<Usuario> {

  constructor(private service: UsuarioService){}

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Usuario>
  {
    if (route.params && route.params['id_user']) {
            return this.service.loadById(route.params['id_user']);
    }
  return of(...arguments,{id_user:'', username:'',  password:'', enabled:'' });

  }

};
