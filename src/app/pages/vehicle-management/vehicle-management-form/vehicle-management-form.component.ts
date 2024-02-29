import { Component, OnInit } from '@angular/core';
import { IElectricSystemFormGroup, IGeneralContidionFormGroup, IGeneralStateFormGroup, IMechanicFormGroup, ISafetyAccessoriesFormGroup, IVehicleFormGroup, selectOptionsOfStates } from '../../../interfaces/app/vehicle';
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
  fGeneralSate: IGeneralStateFormGroup = this.formService.newFormGeneralState();
  fElectricSystem: IElectricSystemFormGroup = this.formService.newFormElectricSystem();
  fSafetyAccessories: ISafetyAccessoriesFormGroup = this.formService.newFormSafetyAccesory();

  // select options
  selectOptions = selectOptionsOfStates
  selectedOption: string[] = [];

  constructor(
    private formService: FormsService
  ) { 
    this.selectedOption = new Array(this.selectOptions.length).fill('');
  }

  ngOnInit(): void {

    const saveData = localStorage.getItem('formData');

    if (saveData){
      const formData = JSON.parse(saveData);
      this.fVehicle.setValue(formData.vehicle);
      this.fMechanic.setValue(formData.mechanic);
      this.fGeneralContition.setValue(formData.generalCondition);
      this.fGeneralSate.setValue(formData.generalState);
      this.fElectricSystem.setValue(formData.electricSystem);
      this.fSafetyAccessories.setValue(formData.safetyAccessories);
    }
  }

  /**
   * fuction to save vehicle form
   */
  saveVehicleForm(): void {
    
    const formData = {
      fVehicle: this.fVehicle.value,
      fMechanic: this.fMechanic.value,
      fGeneralContition: this.fGeneralContition.value,
      fGeneralSate: this.fGeneralSate.value,
      fElectricSystem: this.fElectricSystem.value,
      fSafetyAccessories: this.fSafetyAccessories.value
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    console.log('Data saved successfully!');

  }

  onSelectionChange(event: any, index: number) {
    console.log("Index:", index)
    this.selectedOption[index] = event.target.value;
  }

}
