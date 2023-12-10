import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from '../../../model/clientes';
import { ClientesService } from 'src/app/clientes/services/clientes.service';
import { FormUtilsService } from 'src/app/shared/form/form-utils.service';
import { Embarcacao } from '../../../model/embarcacao_cli';



@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent {

  form!: FormGroup;


  constructor(
              private formBuilder: UntypedFormBuilder,
              private service: ClientesService,
              private snackBar: MatSnackBar,
              private location: Location,
              private route:ActivatedRoute,
              public formUtils: FormUtilsService )
  { }

  ngOnInit():void {
    const cli: Cliente = this.route.snapshot.data['clie'];
    this.form = this.formBuilder.group({
              id_cliente: [cli.id_cliente],
              nm_cliente: [cli.nm_cliente, Validators.required],
              end_cliente:[cli.end_cliente, Validators.required],
              tel_cliente:[cli.tel_cliente, Validators.required],
              email_cliente:[cli.email_cliente, Validators.required],
              embarcacoes: this.formBuilder.array(this.retrieveEmbarcacacoes(cli), Validators.required)
    });

  }

  private retrieveEmbarcacacoes(cli: Cliente)  {
    const embarcacoes = [];
    if (cli?.embarcacoes) {
      cli.embarcacoes.forEach(embarcacao => embarcacoes.push(this.createEmbarcacao(embarcacao)));
    } else {
      embarcacoes.push(this.createEmbarcacao());
    }
    return embarcacoes;
  }

  getEmbarcacoesFormArray() {
    return (<UntypedFormArray>this.form.get('embarcacoes')).controls;
  }

  addNewEmbarcacao(){
    const embarcacoes = this.form.get('embarcacoes') as UntypedFormArray;
    embarcacoes.push(this.createEmbarcacao());
  }


  private createEmbarcacao(embarcacao : Embarcacao = {id_embarc:'', nm_embarc:'', nrmarinha_embarc:'' , tipo_embarc:'',}){
      return this.formBuilder.group({
        id_embarc:[embarcacao.id_embarc],
        nm_embarc:[embarcacao.nm_embarc, Validators.required],
        nrmarinha_embarc:[embarcacao.nrmarinha_embarc, Validators.required],
        tipo_embarc:[embarcacao.tipo_embarc, Validators.required]
      });
  }


  removeEmbarcacao(index: number ){
    const embarcacoes = this.form.get('embarcacoes') as UntypedFormArray;
    console.log(embarcacoes);
    embarcacoes.removeAt(index);


  }


  onSubmit() {
    if (this.form.valid) {
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
    this.snackBar.open('Cliente Salvo com Sucesso!', '', {duration:4000});
    this.onCancel();
  }

  private OnError(){
    this.snackBar.open('Erro ao Salvar Cliente!', '', {duration:4000});
  }





}



