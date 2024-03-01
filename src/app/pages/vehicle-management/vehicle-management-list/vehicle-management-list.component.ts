import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-management-list',
  templateUrl: './vehicle-management-list.component.html',
  styleUrl: './vehicle-management-list.component.scss'
})
export class VehicleManagementListComponent {

  constructor(
    private router: Router
  ) { }

  /**
   * create to function rediect to vehicle-management-form
   */
  navForm() {
    this.router.navigate(['/vehicle-management/register'])
  }

}
