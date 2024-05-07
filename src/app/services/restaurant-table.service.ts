import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantTable } from '../common/restaurant-table';

@Injectable({
  providedIn: 'root'
})
export class RestaurantTableService {

  baseURL = "http://localhost:9095/tables";

  constructor(private http: HttpClient) { }

  public getRestaurantTableList() : Observable<RestaurantTable []>
  {
    return this.http.get<RestaurantTable[]>(this.baseURL);
  }

  public getRestaurantTableById(tableNumber: number): Observable<RestaurantTable>
  {
      return this.http.get<RestaurantTable>(`${this.baseURL}/${tableNumber}`);
  }



}
