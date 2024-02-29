import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVehicle } from 'src/app/interfaces/app/vehicle';

@Component({
  selector: 'app-vehicle-management-resume',
  templateUrl: './vehicle-management-resume.component.html',
  styleUrl: './vehicle-management-resume.component.scss'
})
export class VehicleManagementResumeComponent implements OnInit {

  vehicle: IVehicle = {};

  formData: any;
  filteredData: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Obtener la placa del vehículo de los parámetros de la ruta
    this.route.params.subscribe(params => {
      const placa = params['placa'];

      // Recuperar los datos del localStorage
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        this.formData = JSON.parse(savedData);
        // Filtra los datos para mostrar solo los que tienen el estado "No Operativo"
        this.filteredData = {
          fVehicle: this.formData.fVehicle,
          fGeneralState: this.formData.fGeneralState,
          fElectricSystem: this.formData.fElectricSystem,
        }
      }
    });
  }

}
