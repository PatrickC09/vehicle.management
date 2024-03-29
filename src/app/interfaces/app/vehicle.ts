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
    // electric system
    electricSystem?: IElectricSystem;
    // safety accessories
    safetyAccessories?: ISafetyAccessories;
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

export interface IElectricSystem {
    dashboard?: string;
    frontLightIntense?: string;
    turnSignals?: string;
    brakeLights?: string;
    retroLights?: string;
    retroAlarm?: string;
    InteriorLight?: string;
    parkingLights?: string;
    whistle?: string;
    siren?: string;
    blender?: string;
}

export interface ISafetyAccessories {
    absorbentCloth?: string;
    roadSafetyFlag?: string;
    flashlight?: string;
    safetyCones?: string;
    firstAidKit?: string;
    fireExtinguisher?: string;
    wooden?: string;
    toolBox?: string;
    pole?: string;
    exhaustPipe?: string;
    rollbarInternalCage?: string;
    reflectiveTapes?: string;
}

export interface IInspectionData {
    teamReport?: string;
    inspectorName?: string;
    approverName?: string;
    inspectorCargo?: string;
    approverCargo?: string;
    inspectorFirmaI?: string;
    approverFirma?: string;
    inspectorDate?: string;
    approverDate?: string;
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

export interface IElectricSystemFormGroup extends FormGroup {
    value: IElectricSystem;
    controls: {
        dashboard: FormControl<string>
        frontLightIntense: FormControl<string>
        turnSignals: FormControl<string>
        brakeLights: FormControl<string>
        retroLights: FormControl<string>
        retroAlarm: FormControl<string>
        InteriorLight: FormControl<string>
        parkingLights: FormControl<string>
        whistle: FormControl<string>
        siren: FormControl<string>
        blender: FormControl<string>
    }
}

export interface ISafetyAccessoriesFormGroup extends FormGroup {
    value: ISafetyAccessories;
    controls: {
        absorbentCloth: FormControl<string>
        roadSafetyFlag: FormControl<string>
        flashlight: FormControl<string>
        safetyCones: FormControl<string>
        firstAidKit: FormControl<string>
        fireExtinguisher: FormControl<string>
        wooden: FormControl<string>
        toolBox: FormControl<string>
        pole: FormControl<string>
        exhaustPipe: FormControl<string>
        rollbarInternalCage: FormControl<string>
        reflectiveTapes: FormControl<string>
    }
}

export interface IInspectionDataFormGroup extends FormGroup {
    value: IInspectionData;
    controls: {
        teamReport: FormControl<string>
        inspectorName: FormControl<string>
        approverName: FormControl<string>
        inspectorCargo: FormControl<string>
        approverCargo: FormControl<string>
        inspectorFirmaI: FormControl<string>
        approverFirma: FormControl<string>
        inspectorDate: FormControl<string>
        approverDate: FormControl<string>
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