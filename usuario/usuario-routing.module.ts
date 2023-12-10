import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioFormComponent } from './containers/usuario-form/usuario-form/usuario-form.component';
import { UsuarioComponent } from './containers/usuario/usuario/usuario.component';
import { usuarioResolver } from './guard/usuario.resolver';

const routes: Routes = [
  {path :'', component: UsuarioComponent},
  {path: 'new', component: UsuarioFormComponent, resolve: {usu: usuarioResolver}},
  {path :'edit/:id_user', component: UsuarioFormComponent, resolve: {usu:usuarioResolver}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
