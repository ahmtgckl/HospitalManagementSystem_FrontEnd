import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import { AppointmentDetails } from '../models/appointmentDetails';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  apiUrl = "https://localhost:44360/api/"

  constructor(private httpClient: HttpClient) { }

  getAppointmentDetails(): Observable<ListResponseModel<AppointmentDetails>> {
    let newPath = this.apiUrl + "Appointment/GetAppointmentDetails";
    return this.httpClient.get<ListResponseModel<AppointmentDetails>>(newPath);
  }


  addAppointment(appointment: Appointment): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Appointment/add", appointment)
  }


  deleteAppointment(appointment:Appointment): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Appointment/delete", appointment)
  }


  updateAppointment(appointment:Appointment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Appointment/update", appointment)
  }






}
