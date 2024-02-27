import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleManagementFormComponent } from './pages/vehicle-management/vehicle-management-form/vehicle-management-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    data:{
      title: 'home'
    },
    children: [
      {
        path: 'vehicle-management',
        loadChildren: () => import('./pages/vehicle-management/vehicle-management.module').then(m => m.VehicleManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
