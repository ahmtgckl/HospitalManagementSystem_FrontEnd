import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Patient } from '../models/patient';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  apiUrl = "https://localhost:44360/api/"

  constructor(private httpClient: HttpClient) { }

  getPatients(): Observable<ListResponseModel<Patient>> {
    let newPath = this.apiUrl + "Patients/getall";
    return this.httpClient.get<ListResponseModel<Patient>>(newPath);
  }


  addPatient(patient: Patient): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Patients/add", patient)
  }

  deletePatient(patient: Patient): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Patients/delete", patient)
  }

  updatePatient(patient:Patient):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Patients/update", patient)
  }


}
