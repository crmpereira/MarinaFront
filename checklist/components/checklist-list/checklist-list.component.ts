import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { CheckList } from '../../model/checklist';



@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.scss']
})
export class ChecklistListComponent {
  [x: string]: any;


  @Input() checklist: CheckList[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = [ 'id_check','tipoCheck' ,'embarcacao','situacao_check','actions' ];

  constructor(private router: Router ){ }

  ngOnInit(): void{}



  onEdit(checklist: CheckList){
    this.edit.emit(checklist);
  }








}
