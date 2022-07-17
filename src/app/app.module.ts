import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PatientComponent } from './components/patient/patient.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { NaviComponent } from './components/navi/navi.component';
import { AppointmentAddComponent } from './components/appointment-add/appointment-add.component';
import { AppointmentDeleteComponent } from './components/appointment-delete/appointment-delete.component';
import { AppointmentUpdateComponent } from './components/appointment-update/appointment-update.component';
import { DoctorAddComponent } from './components/doctor-add/doctor-add.component';
import { DoctorDeleteComponent } from './components/doctor-delete/doctor-delete.component';
import { DoctorUpdateComponent } from './components/doctor-update/doctor-update.component';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientDeleteComponent } from './components/patient-delete/patient-delete.component';
import { PatientUpdateComponent } from './components/patient-update/patient-update.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    AppointmentComponent,
    NaviComponent,
    AppointmentAddComponent,
    AppointmentDeleteComponent,
    AppointmentUpdateComponent,
    DoctorAddComponent,
    DoctorDeleteComponent,
    DoctorUpdateComponent,
    PatientAddComponent,
    PatientDeleteComponent,
    PatientUpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-botton-left"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
