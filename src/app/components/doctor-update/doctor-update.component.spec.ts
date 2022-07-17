import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUpdateComponent } from './doctor-update.component';

describe('DoctorUpdateComponent', () => {
  let component: DoctorUpdateComponent;
  let fixture: ComponentFixture<DoctorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
