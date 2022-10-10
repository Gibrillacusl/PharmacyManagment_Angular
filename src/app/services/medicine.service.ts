import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

readonly rootUrl = 'https://localhost:7174';
constructor(private http:HttpClient) { }

 //For Getting Data EmployeeList
medicineData:Medicine=new Medicine(); //for post data / Insert data
listMedicine:Medicine[]=[];
isUpdate:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
getAllMedicines(): Observable<Medicine[]> {
  return this.http.get<Medicine[]>(this.rootUrl + '/api/Medicines');
}

getMedicineByName(MedicineName: string): Observable<Medicine> {
  return this.http.get<Medicine>(this.rootUrl + '/api/Medicines/' + MedicineName);
}

// createMedicine(medicine: Medicine): Observable<Medicine> {
//    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
//    return this.http.post<Medicine>(this.rootUrl + '/api/Medicines',
//    medicine, httpOptions);

// }
saveMedicine(){
  return this.http.post(this.rootUrl + '/api/Medicines/',this.medicineData);
}

// updateMedicine(medicine: Medicine,medid:number): Observable<Medicine> {
//   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
//   return this.http.put<Medicine>(this.rootUrl +  '/api/Medicines/'+medid,
//   medicine, httpOptions);
// }
updateMedicine(){
  return this.http.put( this.rootUrl +'/api/Medicines/'+this.medicineData.medicineId,this.medicineData);
}

// deleteMedicineById(medid:number): Observable<number> {
//   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
//   return this.http.delete<number>(this.rootUrl+ '/api/Medicines/' +medid,
// httpOptions);
//}
deleteMedicine(id:number)
  {
    return this.http.delete(this.rootUrl+ '/api/Medicines/' +id);
  }

}
