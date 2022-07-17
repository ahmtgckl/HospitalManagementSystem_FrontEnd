import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {
  patientAddForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private toasreService: ToastrService) { }

  ngOnInit(): void {
    this.createPatientAddForm();
  }


  createPatientAddForm() {
    this.patientAddForm = this.formBuilder.group({
      patientFirstName: ['', Validators.required],
      patientLastName: ['', Validators.required],
      patientInsurance: ['', Validators.required],
      patientAdress: ['', Validators.required],
      patientPhoneNumber: ['', Validators.required]
    });
  }



  add() {
    if (this.patientAddForm.valid) {
      let patientModel = Object.assign({}, this.patientAddForm.value)
      this.patientService.addPatient(patientModel).subscribe(response => {
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
