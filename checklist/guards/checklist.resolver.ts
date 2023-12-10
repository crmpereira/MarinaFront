import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { CheckList } from '../model/checklist';
import { CheckListService } from '../service/checklist.service';



@Injectable({
        providedIn: 'root'
    })

   export class checklistResolver implements Resolve<CheckList> {

  constructor(private service: CheckListService){}

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CheckList>
  {
    if (route.params && route.params['id_check']) {
            return this.service.loadById(route.params['id_check']);
    }
  return of(...arguments,{id_check:'', tipo_check:'',  situacao_check:'', tipoCheck:'', embarcacao:'' });

  }

};
