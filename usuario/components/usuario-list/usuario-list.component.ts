import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent {

  [x: string]: any;

  @Input() usuario: Usuario[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = [ 'id_user','', 'username', 'enabled',  'actions' ];

  constructor(private router: Router ){ }

  ngOnInit(): void{}


  onAdd(){
    this.add.emit(true);
  }

  onEdit(usuario: Usuario){
    this.edit.emit(usuario);
  }

  onDelete(usuario: Usuario){
    this.remove.emit(usuario);

  }

  onBack(){

  }


}
