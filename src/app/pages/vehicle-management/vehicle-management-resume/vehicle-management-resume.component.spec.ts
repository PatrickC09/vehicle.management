import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleManagementResumeComponent } from './vehicle-management-resume.component';

describe('VehicleManagementResumeComponent', () => {
  let component: VehicleManagementResumeComponent;
  let fixture: ComponentFixture<VehicleManagementResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleManagementResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleManagementResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
