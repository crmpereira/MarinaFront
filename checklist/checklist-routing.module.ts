import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChecklistFormComponent } from './containers/checklist-form/checklist-form/checklist-form.component';
import { ChecklistComponent } from './containers/checklist/checklist/checklist.component';
import { checklistResolver } from './guards/checklist.resolver';

const routes: Routes = [
  {path :'', component: ChecklistComponent},
  {path: 'new', component: ChecklistFormComponent, resolve: {check: checklistResolver}},
  {path :'edit/:id_check', component: ChecklistFormComponent, resolve: {check:checklistResolver}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckListRoutingModule { }
