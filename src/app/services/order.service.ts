import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../common/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseURL = "http://localhost:9095/orders";

  constructor(private http: HttpClient) { }

  public getOrderList() : Observable<Order []>
  {
    return this.http.get<Order[]>(this.baseURL);
  }

  public getOrderById(orderId : number)  : Observable<Order>
  {
    return this.http.get<Order>(`${this.baseURL}/${orderId}`);
  }

  public saveOrder(order : Order): Observable<Order>
  {
    return this.http.post<Order>(`${this.baseURL}/order`,order);
  }
}
