import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {
  doctorAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private toasreService: ToastrService) { }

  ngOnInit(): void {
    this.createDoctorAddForm();
  }

  createDoctorAddForm() {
    this.doctorAddForm = this.formBuilder.group({
      doctorFirstName: ['', Validators.required],
      doctorLastName: ['', Validators.required],
      doctorAdress: ['', Validators.required],
      doctorPhoheNumber: ['', Validators.required]
    });
  }


  add() {
    if (this.doctorAddForm.valid) {
      let doctorModel = Object.assign({}, this.doctorAddForm.value)
      this.doctorService.addDoctor(doctorModel).subscribe(response => {
        this.toasreService.success(response.message, "Başarılı")
      },responseError=>{
        if(responseError.error.Errors.lenght>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toasreService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
        }
      })

    } else {
      this.toasreService.error("Dikkat", "Formunuz eksik")
    }

  }

}
