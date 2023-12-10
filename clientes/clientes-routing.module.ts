import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesFormComponent } from './containers/clientes-form/clientes-form/clientes-form.component';
import { ClientesComponent } from './containers/clientes/clientes/clientes.component';
import { clienteResolver } from './guards/cliente.resolver';


const routes: Routes = [
  {path :'', component: ClientesComponent},
  {path: 'new', component: ClientesFormComponent, resolve: {clie: clienteResolver}},
  {path :'edit/:id_cliente', component: ClientesFormComponent, resolve: {clie:clienteResolver}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
