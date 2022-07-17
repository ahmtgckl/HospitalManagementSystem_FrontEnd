import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-delete',
  templateUrl: './doctor-delete.component.html',
  styleUrls: ['./doctor-delete.component.css']
})
export class DoctorDeleteComponent implements OnInit {
  doctorList: Doctor[] = [];
  selectedDoctor: Doctor;

  constructor(
    private doctorService: DoctorService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.listDoctors()
  }



  listDoctors() {
    this.doctorService.getDoctors().subscribe((response) => {
      this.doctorList = response.data;
    });
  }


  deleteDoctor(doctor: Doctor) {
    this.doctorService.deleteDoctor(doctor).subscribe((response) => {
      this.toastrService.success(response.message, 'Başarılı');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

}
