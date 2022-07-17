import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/models/appointment';
import { Doctor } from 'src/app/models/doctor';
import { Patient } from 'src/app/models/patient';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent implements OnInit {
  appointmentAddForm: FormGroup;
  minDate = new Date();
  modelOfAppointment: Appointment;
  doctors: Doctor[] = []
  patients: Patient[] = []
  selectedDoctor = 0
  selectedPatient = 0

  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
    private toastrService: ToastrService,
    private doctorService: DoctorService,
    private patientService: PatientService) { }

  ngOnInit(): void {
    this.createAppointmentAddForm();
    this.getDoctors()
    this.getPatients()
  }



  createAppointmentAddForm() {
    this.appointmentAddForm = this.formBuilder.group({
      doctorId: ['', Validators.required],
      patientId: ['', Validators.required],
      appointmentDate: ['', Validators.required]
    });
  }



  add() {
    if (this.appointmentAddForm.valid) {
      let appointmentModel = Object.assign({}, this.appointmentAddForm.value)
      this.appointmentService.addAppointment(appointmentModel).subscribe(response => {
        this.toastrService.success(response.message, "Başarılı")
      }, responseError => {
        if (responseError.error.Errors.lenght > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası")
          }
        }
      })

    } else {
      this.toastrService.error("Dikkat", "Formunuz eksik")
    }

  }







  getDoctors() {
    this.doctorService.getDoctors().subscribe(response => {
      this.doctors = response.data
    })
  }



  getPatients() {
    this.patientService.getPatients().subscribe(response => {
      this.patients = response.data
    })
  }
}
