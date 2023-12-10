import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

import { CheckListRoutingModule } from './checklist-routing.module';
import { ChecklistComponent } from './containers/checklist/checklist/checklist.component';
import { ChecklistFormComponent } from './containers/checklist-form/checklist-form/checklist-form.component';
import { ChecklistListComponent } from './components/checklist-list/checklist-list.component';



@NgModule({
  declarations: [
    ChecklistComponent,
    ChecklistFormComponent,
    ChecklistListComponent
  ],
  imports: [
    CommonModule,
    CheckListRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ChecklistModule { }
