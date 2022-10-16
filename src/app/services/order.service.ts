import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, UpdateOrder } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient,) { }

  placeOrder(orderModel:Order){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }
   return this.http.post("https://localhost:7174/api/Orders",orderModel,httpOptions);
  }
  getDocByEmail(emailId:string|null){
    return this.http.get(`${'https://localhost:7174/api/Doctors/' + emailId}`);
  }
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('https://localhost:7174/api/Orders');
  }
  getOrdersByDate(from:string|null,to:string|null): Observable<Order[]>{
     return this.http.get<Order[]>('https://localhost:7174/api/Orders/From/' + from + '/To/' + to);
  }

  updatePickedUp(id: number,orderModel:UpdateOrder){
    return this.http.put('https://localhost:7174/api/Orders/'+ id,orderModel);
  }
  getConfirmedPickUp():Observable<Order[]>{
    return this.http.get<Order[]>('https://localhost:7174/api/Orders/confirmation');
  }
}
