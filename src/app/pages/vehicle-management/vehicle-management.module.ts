import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleManagementRoutingModule } from './vehicle-management-routing.module';
import { VehicleManagementFormComponent } from './vehicle-management-form/vehicle-management-form.component';
import { PageModule } from 'src/app/modules/page.module';


@NgModule({
  declarations: [
    VehicleManagementFormComponent,
  ],
  imports: [
    CommonModule,
    VehicleManagementRoutingModule,
    PageModule,
  ]
})
export class VehicleManagementModule { }
