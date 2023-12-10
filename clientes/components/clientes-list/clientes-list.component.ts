import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Cliente } from '../../model/clientes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})

export class ClientesListComponent {
  [x: string]: any;

  @Input() cliente: Cliente[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = [ 'id','nm_cliente', 'end_cliente','tel_cliente', 'email_cliente',  'actions' ];

  constructor(private router: Router ){ }

  ngOnInit(): void{}


  onAdd(){
    this.add.emit(true);
  }

  onEdit(cliente: Cliente){
    this.edit.emit(cliente);
  }

  onDelete(cliente: Cliente){
    this.remove.emit(cliente);

  }

  onBack(){

  }


}
