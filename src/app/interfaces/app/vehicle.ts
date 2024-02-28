import { FormControl, FormGroup } from "@angular/forms";

export interface IVehicle {
    // base
    id?: string;
    createdDate?: string;
    userCreated?: string;
    active?: boolean;
    // general condition
    generalCondition?: IGeneralContidion;
    // vehicle information
    vehicleType?: string;
    vehicleBrand?: string;
    vehicleModel?: string;
    vehicleColor?: string;
    vehicleNumberMotor?: string;
    vechiclePlaca?: string;
    vehicleConbustible?: string;
    vehicleConductor?: string;
    vehicleKilometraje?: string;
    numberSerie?: string;
    systemMechanic?: IMechanic;
    // general state
    generalState?: IGeneralState;
}

export interface IGeneralContidion {
    typeLicense?: string;
    tuition?: string;
    defensiveDrivingCourse?: string;
}

export interface IMechanic {
    battery?: string;
    starter?: string;
    handBrake?: string;
    runningBrake?: string;
    tires?: string;
    emergencyTire?: string;
    glasses?: string;
    sideMirrors?: string;
    seating?: string;
    belts?: string;
    windshieldWiper?: string;
    engineBelt?: string;
    engineCables?: string;
    engineOil?: string;
    radiatorWater?: string;
    brakeFluid?: string;
    steering?: string;
    clutch?: string;
    suspension?: string;
    lubricationOfGrease?: string;
    liquefies?: string;
}

export interface IGeneralState {
    ceiling?: string;
    bonnet?: string;
    doors?: string;
    steps?: string;
    tank?: string;
    mudguards?: string;
    doorLocks?: string;
    valdes?: string;
}
export interface IGeneralContidionFormGroup extends FormGroup {
    value: IGeneralContidion;
    controls: {
        typeLicense: FormControl<string>
        tuition: FormControl<string>
        defensiveDrivingCourse: FormControl<string>
    }

}

export interface IVehicleFormGroup extends FormGroup {
    value: IVehicle;
    controls: {
        vehicleType: FormControl<string>
        vehicleBrand: FormControl<string>
        vehicleModel: FormControl<string>
        vehicleColor: FormControl<string>
        vehicleNumberMotor: FormControl<string>
        vechiclePlaca: FormControl<string>
        vehicleConbustible: FormControl<string>
        vehicleConductor: FormControl<string>
        vehicleKilometraje: FormControl<string>
        numberSerie: FormControl<string>
    }
}

export interface IMechanicFormGroup extends FormGroup {
    value: IMechanic;
    controls: {
        battery: FormControl<string>
        starter: FormControl<string>
        handBrake: FormControl<string>
        runningBrake: FormControl<string>
        tires: FormControl<string>
        emergencyTire: FormControl<string>
        glasses: FormControl<string>
        sideMirrors: FormControl<string>
        seating: FormControl<string>
        belts: FormControl<string>
        windshieldWiper: FormControl<string>
        engineBelt: FormControl<string>
        engineCables: FormControl<string>
        engineOil: FormControl<string>
        radiatorWater: FormControl<string>
        brakeFluid: FormControl<string>
        steering: FormControl<string>
        clutch: FormControl<string>
        suspension: FormControl<string>
        lubricationOfGrease: FormControl<string>
        liquefies: FormControl<string>
    }
}

export interface IGeneralStateFormGroup extends FormGroup {
    value: IGeneralState;
    controls: {
        ceiling: FormControl<string>
        bonnet: FormControl<string>
        doors: FormControl<string>
        steps: FormControl<string>
        tank: FormControl<string>
        mudguards: FormControl<string>
        doorLocks: FormControl<string>
        valdes: FormControl<string>
    }
}

/**
 * options
 */
export const selectOptionsOfStates = [
    "Operativo",
    "No Operativo",
    "Puede conducir con restricciones",
]