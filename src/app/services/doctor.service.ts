import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  apiUrl = "https://localhost:44360/api/"

  constructor(private httpClient: HttpClient) { }

  getDoctors():Observable<ListResponseModel<Doctor>>{
    let newPath = this.apiUrl + "Doctors/getall";
    return this.httpClient.get<ListResponseModel<Doctor>>(newPath);

  }

  addDoctor(doctor: Doctor): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Doctors/add", doctor)
  }


  deleteDoctor(doctor:Doctor): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Doctors/delete", doctor)
  }


  updateDoctor(doctor:Doctor):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Doctors/update", doctor)
  }



}
