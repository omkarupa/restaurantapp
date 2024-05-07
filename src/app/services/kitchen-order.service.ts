import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KitchenOrder } from '../common/kitchen-order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KitchenOrderService {

  baseURL = "http://localhost:9095/kitchen-preparation";

  constructor(private http: HttpClient) { }


 public getKitchenOrderList() : Observable<KitchenOrder[]>

  {
    return this.http.get<KitchenOrder[]>(this.baseURL);
  }


}
