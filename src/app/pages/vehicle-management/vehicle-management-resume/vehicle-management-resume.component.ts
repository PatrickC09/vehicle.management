import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exporter } from 'src/app/helpers/pdf-exporter';
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
   * function to back to the previous page
   */
  back() {
    window.history.back();
  }

  /**
   * fuction to redirect to form page and empty the local storage
   */
  newForm() {
    localStorage.removeItem('formData');
    window.history.back();
  }

  /**
   * function navigate dashboard
   */
  navigateDashboard() {
    this.router.navigate(['/vehicle-management/dashboard']);
  }

   /**
   * function to export dashboard to pdf
   */
   async exportToPdf() {

    this.isPrinting = true;

    await Exporter.exportHtmlElementToPDF(document.getElementById('vehicle-form'), 'vehicle-form.pdf')

    this.isPrinting = false;

  }

}
