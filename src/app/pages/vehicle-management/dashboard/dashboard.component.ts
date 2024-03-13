import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exporter } from 'src/app/helpers/pdf-exporter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  formData: any
  filteredData: any;

  // variables export
  isPrinting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
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

  /**
   * function to export dashboard to pdf
   */
  async exportToPdf() {

    this.isPrinting = true;

    await Exporter.exportHtmlElementToPDF(document.getElementById('dashboard'), 'dashboard.pdf')

    this.isPrinting = false;

  }

  newForm() {
    localStorage.removeItem('formData');
    this.router.navigate(['/vehicle-management/list']);
  }

}
