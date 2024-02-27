import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleManagementFormComponent } from './vehicle-management-form/vehicle-management-form.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administración de Vehículos'
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: VehicleManagementFormComponent,
        data: {
          title: 'Registrar Vehículo'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleManagementRoutingModule { }
