import { Component, OnInit } from '@angular/core';
import { IGeneralContidionFormGroup, IMechanicFormGroup, IVehicleFormGroup, selectOptionsOfStates } from '../../../interfaces/app/vehicle';
import { FormsService } from '../../../services/forms.service';

@Component({
  selector: 'app-vehicle-management-form',
  templateUrl: './vehicle-management-form.component.html',
  styleUrl: './vehicle-management-form.component.scss'
})
export class VehicleManagementFormComponent implements OnInit {

  // information of vehicle
  fVehicle: IVehicleFormGroup = this.formService.newFormRegisterVehicle();
  fMechanic: IMechanicFormGroup = this.formService.newFormMechanic();
  fGeneralContition: IGeneralContidionFormGroup = this.formService.newFormGeneralCondition();

  // select options
  selectOptions = selectOptionsOfStates
  selectedOption: string[] = [];

  constructor(
    private formService: FormsService
  ) { 
    this.selectedOption = new Array(this.selectOptions.length).fill('');
  }

  ngOnInit(): void {

  }

  /**
   * fuction to save vehicle form
   */
  saveVehicle(): void {
    console.log(this.fVehicle.value);
    console.log(this.fGeneralContition.value);
    console.log(this.fMechanic.value);
  }

  onSelectionChange(event: any, index: number) {
    console.log("Index:", index)
    this.selectedOption[index] = event.target.value;
  }

}
