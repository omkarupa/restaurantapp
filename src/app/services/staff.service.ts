import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../common/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  baseURL = "http://localhost:9095/staffs";

  constructor(private http: HttpClient) { }

  public getStaffList() : Observable<Staff []>
  {
    return this.http.get<Staff[]>(this.baseURL);
  }

  public getStaffById(staffId: number): Observable<Staff>
  {
      return this.http.get<Staff>(`${this.baseURL}/${staffId}`);
  }
}
