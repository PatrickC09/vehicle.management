import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleManagementListComponent } from './vehicle-management-list.component';

describe('VehicleManagementListComponent', () => {
  let component: VehicleManagementListComponent;
  let fixture: ComponentFixture<VehicleManagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleManagementListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
