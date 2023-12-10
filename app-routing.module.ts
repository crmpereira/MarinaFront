import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  path: '', pathMatch: 'full',   redirectTo : 'home'},
  {  path: 'clientes',loadChildren: () => import('./clientes/clientes.module').then(m=>m.ClientesModule)},
  {  path: 'embarcacoes',loadChildren: () => import('./embarcacoes/embarcacoes.module').then(m=>m.EmbarcacoesModule)},
  {  path: 'agenda',loadChildren: () => import('./agenda/agenda.module').then(m=>m.AgendaModule)},
  {  path: 'usuario',loadChildren: () => import('./usuario/usuario.module').then(m=>m.UsuarioModule)},
  {  path: 'checklist',loadChildren: () => import('./checklist/checklist.module').then(m=>m.ChecklistModule)},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }



