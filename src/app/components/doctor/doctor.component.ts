import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  doctorList: Doctor[] = [];
  selectedDoctor: Doctor;
  doctorUpdateForm: FormGroup;
  constructor(
    private doctorService: DoctorService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getDoctors();
    this.listDoctors();

  }


  getDoctors() {
    this.doctorService.getDoctors().subscribe(response => { this.doctors = response.data })
  }


  deleteDoctor(doctor: Doctor) {
    this.doctorService.deleteDoctor(doctor).subscribe((response) => {
      this.toastrService.success(response.message, 'Başarılı');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }


  listDoctors() {
    this.doctorService.getDoctors().subscribe((response) => {
      this.doctorList = response.data;
    });
  }


  updateCreateForm() {
    this.doctorUpdateForm = this.formBuilder.group({
      id: [this.selectedDoctor.id, Validators.required],
      doctorFirstName: [this.selectedDoctor.doctorFirstName, Validators.required],
      doctorLastName: [this.selectedDoctor.doctorLastName, Validators.required],
      doctorAdress: [this.selectedDoctor.doctorAdress, Validators.required],
      doctorPhoheNumber: [this.selectedDoctor.doctorPhoheNumber, Validators.required]
    });
  }


  setSelectedDoctorToUpdate(doctor: Doctor) {
    this.selectedDoctor = doctor;
    this.updateCreateForm();
  }


  updateDoctor() {
    if (this.doctorUpdateForm.valid) {
      let doctorModel = Object.assign({}, this.doctorUpdateForm.value);
      this.doctorService.updateDoctor(doctorModel).subscribe(
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
