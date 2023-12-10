import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Agenda } from '../../model/agenda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.scss']
})
export class AgendaListComponent {
  [x: string]: any;

  @Input() agenda: Agenda[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = [ 'id_agenda', 'dh_solicit_agenda','situacaoAgenda', 'cliente',  'actions' ];


  constructor(private router: Router ){ }

  ngOnInit(): void{}


  onAdd(){
    this.add.emit(true);
  }

  onEdit(agenda: Agenda){
    this.edit.emit(agenda);
  }

  onDelete(agenda: Agenda){
    this.remove.emit(agenda);

  }

  onBack(){

  }







}
