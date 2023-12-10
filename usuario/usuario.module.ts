import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioComponent } from './containers/usuario/usuario/usuario.component';
import { UsuarioFormComponent } from './containers/usuario-form/usuario-form/usuario-form.component';
import { UsuarioRoutingModule } from './usuario-routing.module';



@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioComponent,
    UsuarioFormComponent
  ],
  imports: [
    UsuarioRoutingModule,
    CommonModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
