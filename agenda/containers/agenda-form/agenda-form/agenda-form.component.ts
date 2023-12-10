import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Agenda } from 'src/app/agenda/model/agenda';
import { AgendaService } from 'src/app/agenda/service/agenda.service';
import { FormUtilsService } from 'src/app/shared/form/form-utils.service';
import { ClientesService } from 'src/app/clientes/services/clientes.service';
import { Cliente } from 'src/app/clientes/model/clientes';



@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styleUrls: ['./agenda-form.component.scss']
})
export class AgendaFormComponent {

  form!: FormGroup;
  clientes: any[] = [];
  embarcacoes: any[] = [];

  constructor(  private formBuilder: UntypedFormBuilder,
                private service: AgendaService,
                private clienteService: ClientesService,
                private snackBar: MatSnackBar,
                private location: Location,
                private route:ActivatedRoute,
                public formUtils: FormUtilsService
                ){}

  ngOnInit():void{
    const age: Agenda = this.route.snapshot.data['age'];

    this.form = this.formBuilder.group({
        id_agenda:          [age.id_agenda],
        dh_solicit_agenda:  [age.dh_solicit_agenda,Validators.required],
        situacao_agenda:    [age.situacao_agenda,Validators.required ],
        cliente :           [age.cliente, Validators.required],
        embarcacao:         [age.embarcacao ,Validators.required]
  })
  //console.log("Campo Data: ", this.formBuilder.group({ dh_solicit_agenda: [age.dh_solicit_agenda] }).get('dh_solicit_agenda')?.value);

  if (age.cliente  &&  age.cliente.id_cliente ){

      this.clienteService.loadById(age.cliente.id_cliente)
        .subscribe((cliente: any) => {
            this.clientes = [cliente];
            this.embarcacoes = cliente.embarcacoes || [];
      });
  } else {
      this.clienteService.list()
        .subscribe((listaclientes:any) => {
         this.clientes = listaclientes;
       })
      }
  }

  onChangeCliente(cliente: any ):void{
    const clienteControl  = this.form.get('cliente');
    console.log( cliente  )  ;
    this.embarcacoes = (cliente.value as Cliente).embarcacoes || [];
  }

  onSubmit() {
    if (this.form.valid) {

      this.form.value.dh_solicit_agenda = new Date(Date.parse(this.form.value.dh_solicit_agenda)).toLocaleString("pt-br", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }).replace(",","")  ;


      this.service.save(this.form.value)
        .subscribe(result => this.OnSucess(), error => this.OnError());
    } else {
      this.formUtils.validateAllFormFields(this.form);
    }
  }

  onCancel(){
    this.location.back();
  }

  private OnSucess(){
    this.snackBar.open('Agenda Salva com Sucesso!', '', {duration:4000});
    this.snackBar.open('Check List foram criados!', '' ,{duration:4000});
    this.onCancel();
  }

  private OnError(){
    this.snackBar.open('Erro ao Salvar Agenda!', '', {duration:4000});
  }




}



















