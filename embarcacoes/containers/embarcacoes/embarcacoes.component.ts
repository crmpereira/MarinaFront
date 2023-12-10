import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Embarcacao } from '../../model/embarcacao';
import { EmbarcacoesService } from '../../services/embarcacoes.service';


@Component({
  selector: 'app-embarcacoes',
  templateUrl: './embarcacoes.component.html',
  styleUrls: ['./embarcacoes.component.scss']
})

export class EmbarcacoesComponent   implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  embarcacao  : Observable<Embarcacao[]>;

  constructor(private embarcacaoService: EmbarcacoesService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar){
      this.embarcacao = this.embarcacaoService.list()
    .pipe(
      catchError(error => {
        console.log()
        return of([])
      })
    );

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  refresh(){
    window.location.reload();
  }

  onEdit(embarcacao: Embarcacao ){
    this.router.navigate(['edit', embarcacao.id_embarc], {relativeTo:this.route});
  }

  onRemove(embarcacao: Embarcacao ){
   this.embarcacaoService.remove(embarcacao.id_embarc.toString()).subscribe(
    next,() => {
      this.snackBar.open('Removido Com Sucesso!', 'X',{
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      })}
   );
   this.refresh();
  }

}
function next(value: Object): void {
  throw new Error('Function not implemented.');
}

