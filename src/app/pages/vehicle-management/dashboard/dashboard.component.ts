import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  formData: any
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
