import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { DoctorAddComponent } from './components/doctor-add/doctor-add.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { HomeComponent } from './components/home/home.component';
import { PatientComponent } from './components/patient/patient.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "Doctors", component: DoctorComponent },
  { path: "Appointments", component: AppointmentComponent },
  { path: "Patients", component: PatientComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
