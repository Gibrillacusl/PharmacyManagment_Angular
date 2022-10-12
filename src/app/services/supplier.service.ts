import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddSuppliers, Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  readonly rootUrl = 'https://localhost:7174';
  constructor(private http:HttpClient) { }
  isAdd:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  isUpdate:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.rootUrl + '/api/Suppliers');
  }
  addSuppliers(supplier:AddSuppliers)  {
    return this.http.post(this.rootUrl + '/api/Suppliers',supplier);
  }
  deleteSuupliers(id:number){
    return this.http.delete(`${this.rootUrl+ '/api/Suppliers/'}+${id}`)
  }
  updateSuppliers(id:number|undefined,supplier:AddSuppliers){
    return this.http.put(`${this.rootUrl+ '/api/Suppliers/'+ id}`,supplier);
  }
}
