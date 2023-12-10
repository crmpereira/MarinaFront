import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup,  UntypedFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CheckList } from 'src/app/checklist/model/checklist';
import { CheckListService } from 'src/app/checklist/service/checklist.service';
import { FormUtilsService } from 'src/app/shared/form/form-utils.service';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.scss']
})
export class ChecklistFormComponent {

  form!: FormGroup;
  embarcacoes: any[] = [];

  constructor(
              private formBuilder: UntypedFormBuilder,
              private service: CheckListService,
              private snackBar: MatSnackBar,
              private location: Location,
              private route:ActivatedRoute,
              public formUtils: FormUtilsService
  ){}

  ngOnInit():void{
    const checklist: CheckList = this.route.snapshot.data['check'];
    this.form = this.formBuilder.group({
              id_check: [checklist.id_check],
              tipo_check: [checklist.tipo_check, Validators.required],
              situacao_check: [checklist.situacao_check, Validators.required],
              tipoCheck:[checklist.tipoCheck, Validators.required],
              embarcacao:[checklist.embarcacao]
    });
  }


  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value)
        .subscribe(result => this.OnSucess(), error => this.OnError());
    } else {
      this.formUtils.validateAllFormFields(this.form);
    }
  }


  private OnSucess(){
    this.snackBar.open('Check Salvo com Sucesso!', '', {duration:4000});
    this.onCancel();
  }

  private OnError(){
    this.snackBar.open('Erro ao Salvar Check!', '', {duration:4000});
  }


  onCancel(){
    this.location.back();
  }


}
