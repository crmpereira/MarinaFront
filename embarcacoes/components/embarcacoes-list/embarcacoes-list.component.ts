import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Embarcacao } from '../../model/embarcacao';

@Component({
  selector: 'app-embarcacoes-list',
  templateUrl: './embarcacoes-list.component.html',
  styleUrls: ['./embarcacoes-list.component.scss']
})
export class EmbarcacoesListComponent {
[x: string]: any;

  @Input() embarcacao: Embarcacao[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = [ 'id_embarc','nm_embarc', 'nrmarinha_embarc', 'tipo_embarc','cliente_id','actions' ];

  constructor(){ }


  ngOnInit(): void{}


  onAdd(){
    this.add.emit(true);
  }

  onEdit(embarcacao: Embarcacao){
    this.edit.emit(embarcacao);
  }

  onDelete(embarcacao: Embarcacao){
   this.remove.emit(embarcacao);
  }

}
