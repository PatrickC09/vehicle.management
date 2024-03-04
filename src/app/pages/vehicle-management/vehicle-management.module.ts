import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleManagementRoutingModule } from './vehicle-management-routing.module';
import { VehicleManagementFormComponent } from './vehicle-management-form/vehicle-management-form.component';
import { PageModule } from 'src/app/modules/page.module';
import { VehicleManagementResumeComponent } from './vehicle-management-resume/vehicle-management-resume.component';
import { VehicleManagementListComponent } from './vehicle-management-list/vehicle-management-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    VehicleManagementFormComponent,
    VehicleManagementResumeComponent,
    VehicleManagementListComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    VehicleManagementRoutingModule,
    PageModule,
  ]
})
export class VehicleManagementModule { }
