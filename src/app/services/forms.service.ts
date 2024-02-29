import { Injectable } from '@angular/core';
import { IElectricSystem, IElectricSystemFormGroup, IGeneralContidion, IGeneralContidionFormGroup, IGeneralState, IGeneralStateFormGroup, IMechanic, IMechanicFormGroup, IVehicle, IVehicleFormGroup } from '../interfaces/app/vehicle';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(
    private fb: FormBuilder
  ) { }

  /**
   * function to create new register vehicle form instance
   */
  newFormRegisterVehicle(vehicle?: IVehicle): IVehicleFormGroup {
    return this.fb.group({
      vehicleType: [vehicle?.vehicleType || ''],
      vehicleBrand: [vehicle?.vehicleBrand || ''],
      vehicleModel: [vehicle?.vehicleModel || ''],
      vehicleColor: [vehicle?.vehicleColor || ''],
      vehicleNumberMotor: [vehicle?.vehicleNumberMotor || ''],
      vechiclePlaca: [vehicle?.vechiclePlaca || ''],
      vehicleConbustible: [vehicle?.vehicleConbustible || ''],
      vehicleConductor: [vehicle?.vehicleConductor || ''],
      vehicleKilometraje: [vehicle?.vehicleKilometraje || ''],
      numberSerie: [vehicle?.numberSerie || '']
    }) as IVehicleFormGroup
  }

  /**
   * fuction to create general contition form
   */
  newFormGeneralCondition(generalCondition?: IGeneralContidion): IGeneralContidionFormGroup {
    return this.fb.group({
      typeLicense: [generalCondition?.typeLicense || ''],
      tuition: [generalCondition?.tuition || ''],
      defensiveDrivingCourse: [generalCondition?.defensiveDrivingCourse || '']
    }) as IGeneralContidionFormGroup
  }

  /**
   * fuction to register mechanic form
   */
  newFormMechanic(mechanic?: IMechanic): IMechanicFormGroup {
    return this.fb.group({
      battery: [mechanic?.battery || ''],
      starter: [mechanic?.starter || ''],
      handBrake: [mechanic?.handBrake || ''],
      runningBrake: [mechanic?.runningBrake || ''],
      tires: [mechanic?.tires || ''],
      emergencyTire: [mechanic?.emergencyTire || ''],
      glasses: [mechanic?.glasses || ''],
      sideMirrors: [mechanic?.sideMirrors || ''],
      seating: [mechanic?.seating || ''],
      belts: [mechanic?.belts || ''],
      windshieldWiper: [mechanic?.windshieldWiper || ''],
      engineBelt: [mechanic?.engineBelt || ''],
      engineCables: [mechanic?.engineCables || ''],
      engineOil: [mechanic?.engineOil || ''],
      radiatorWater: [mechanic?.radiatorWater || ''],
      brakeFluid: [mechanic?.brakeFluid || ''],
      steering: [mechanic?.steering || ''],
      clutch: [mechanic?.clutch || ''],
      suspension: [mechanic?.suspension || ''],
      lubricationOfGrease: [mechanic?.lubricationOfGrease || ''],
      liquefies: [mechanic?.liquefies || '']
    }) as IMechanicFormGroup
  }

  /**
   * function to create general state form
   */
  newFormGeneralState(generalState?: IGeneralState): IGeneralStateFormGroup {
    return this.fb.group({
      ceiling: [generalState?.ceiling || ''],
      bonnet: [generalState?.bonnet || ''],
      doors: [generalState?.doors || ''],
      steps: [generalState?.steps || ''],
      tank: [generalState?.tank || ''],
      mudguards: [generalState?.mudguards || ''],
      doorLocks: [generalState?.doorLocks || ''],
      valdes: [generalState?.valdes || '']
    }) as IGeneralStateFormGroup
  }

  /**
   * function to create electric system form
   */
  newFormElectricSystem(systemElectric?: IElectricSystem): IElectricSystemFormGroup {
    return this.fb.group({
      dashboard: [systemElectric?.dashboard || ''],
      frontLightIntense: [systemElectric?.frontLightIntense || ''],
      turnSignals: [systemElectric?.turnSignals || ''],
      brakeLights: [systemElectric?.brakeLights || ''],
      retroLights: [systemElectric?.retroLights || ''],
      retroAlarm: [systemElectric?.retroAlarm || ''],
      InteriorLight: [systemElectric?.InteriorLight || ''],
      parkingLights: [systemElectric?.parkingLights || ''],
      whistle: [systemElectric?.whistle || ''],
      siren: [systemElectric?.siren || ''],
      blender: [systemElectric?.blender || '']
    }) as IElectricSystemFormGroup
  }

}

