import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

readonly rootUrl = 'https://localhost:7174';

constructor(private http:HttpClient) { }
fromData:Doctor=new Doctor();
registerdoctor(){
  return this.http.post(this.rootUrl + '/api/Doctors', this.fromData);
}
getDoctorByName(){
  let url="https://localhost:7174/api/Doctors"
  return this.http.get(url)
}
}
