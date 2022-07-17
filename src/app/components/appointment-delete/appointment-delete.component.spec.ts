import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDeleteComponent } from './appointment-delete.component';

describe('AppointmentDeleteComponent', () => {
  let component: AppointmentDeleteComponent;
  let fixture: ComponentFixture<AppointmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
