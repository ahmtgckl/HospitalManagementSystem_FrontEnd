import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Patient[] = [];
  patientList: Patient[] = [];
  selectedPatient: Patient;
  patientUpdateForm: FormGroup;

  constructor(
    private patientService: PatientService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatients().subscribe(response => { this.patients = response.data })
  }

  deletePatient(patient: Patient) {
    this.patientService.deletePatient(patient).subscribe((response) => {
      this.toastrService.success(response.message, 'Başarılı');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }



  listPatients() {
    this.patientService.getPatients().subscribe((response) => {
      this.patientList = response.data;
    });
  }


  updateCreateForm() {
    this.patientUpdateForm = this.formBuilder.group({
      id: [this.selectedPatient.id, Validators.required],
      patientFirstName: [this.selectedPatient.patientFirstName, Validators.required],
      patientLastName: [this.selectedPatient.patientLastName, Validators.required],
      patientInsurance: [this.selectedPatient.patientInsurance, Validators.required],
      patientAdress: [this.selectedPatient.patientAdress, Validators.required],
      patientPhoneNumber: [this.selectedPatient.patientPhoneNumber, Validators.required]
    });
  }


  setSelectedPatientToUpdate(patient: Patient) {
    this.selectedPatient = patient;
    this.updateCreateForm();
  }


  updatePatient() {
    if (this.patientUpdateForm.valid) {
      let patientModel = Object.assign({}, this.patientUpdateForm.value);
      this.patientService.updatePatient(patientModel).subscribe(
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
