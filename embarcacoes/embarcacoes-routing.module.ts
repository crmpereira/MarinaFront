import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmbarcacoesComponent } from './containers/embarcacoes/embarcacoes.component';
import { EmbarcacoesFormComponent } from './containers/embarcacoes-form/embarcacoes-form.component';
import { embarcacaoResolver } from './guards/embarcacao.resolver';


const routes: Routes = [
  {path :'', component: EmbarcacoesComponent},
  {path :'new', component: EmbarcacoesFormComponent},
  {path :'edit/:id_embarc', component: EmbarcacoesFormComponent, resolve: {embar:embarcacaoResolver}}
  ///{path :'delete/:id', component:  EmbarcacoesFormComponent, resolve: {embar:embarcacaoResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmbarcacoesRoutingModule { }
