import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../common/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  baseURL = "http://localhost:9095/menuItems";

  constructor(private http: HttpClient) { }

  public getMenuItemList() : Observable<MenuItem []>
  {
    return this.http.get<MenuItem[]>(this.baseURL);
  }

  public getMenuItemById(menuItemId : number)  : Observable<MenuItem>
  {
    return this.http.get<MenuItem>(`${this.baseURL}/${menuItemId}`);
  }

  public getMenuItemsByCategory(category: string)  : Observable<MenuItem []>
  {
    return this.http.get<MenuItem[]>(`${this.baseURL}/category/${category}`);
  }

  public saveMenuItem(menuItem : MenuItem): Observable<MenuItem>
  {
    return this.http.post<MenuItem>(`${this.baseURL}/menuItem`,menuItem);
  }


}
