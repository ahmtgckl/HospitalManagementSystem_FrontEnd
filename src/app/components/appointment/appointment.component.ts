import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentDetails } from 'src/app/models/appointmentDetails';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointments: AppointmentDetails[] = []
  appointmentList: AppointmentDetails[] = [];
  selectedAppointment: Appointment;
  appointmentUpdateForm: FormGroup;

  constructor(
    private appointmentService: AppointmentService,
    private route: Router,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAppointmentDetails();
    this.listAppointments();
  }


  getAppointmentDetails() {
    this.appointmentService.getAppointmentDetails().subscribe(response => { this.appointments = response.data })
  }


  deleteAppointment(appointment: Appointment) {
    this.appointmentService.deleteAppointment(appointment).subscribe((response) => {
      this.toastrService.success(response.message, 'Başarılı');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }




  listAppointments() {
    this.appointmentService.getAppointmentDetails().subscribe((response) => {
      this.appointmentList = response.data;
    });
  }


  updateCreateForm() {
    this.appointmentUpdateForm = this.formBuilder.group({
      id: [this.selectedAppointment.id, Validators.required],
      doctorId: [this.selectedAppointment.doctorId, Validators.required],
      patientId: [this.selectedAppointment.patientId, Validators.required],
      appointmentDate: [this.selectedAppointment.appointmentDate, Validators.required],
    });
  }


  setSelectedAppointmentToUpdate(appointment: Appointment) {
    this.selectedAppointment = appointment;
    this.updateCreateForm();
  }




  updateAppointment() {
    if (this.appointmentUpdateForm.valid) {
      let appointmentModel = Object.assign({}, this.appointmentUpdateForm.value);
      this.appointmentService.updateAppointment(appointmentModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (responseError) => {
          if (responseError.error.ValidationErrors > 0) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.warning(
        'İsim boş olamaz',
        'Güncelleme Başarısız'
      );
    }
  }


}
