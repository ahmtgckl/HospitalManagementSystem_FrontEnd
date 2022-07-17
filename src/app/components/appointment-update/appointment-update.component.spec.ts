import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentUpdateComponent } from './appointment-update.component';

describe('AppointmentUpdateComponent', () => {
  let component: AppointmentUpdateComponent;
  let fixture: ComponentFixture<AppointmentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
