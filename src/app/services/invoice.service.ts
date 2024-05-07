import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../common/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  baseURL = "http://localhost:9095/invoices";

  constructor(private http: HttpClient) { }

  public getInvoiceList() : Observable<Invoice []>
  {
    return this.http.get<Invoice[]>(this.baseURL);
  }

  public getInvoiceById(invoiceNumber : number)  : Observable<Invoice>
  {
    return this.http.get<Invoice>(`${this.baseURL}/${invoiceNumber}`);
  }

  public saveInvoice(invoice : Invoice): Observable<Invoice>
  {
    return this.http.post<Invoice>(`${this.baseURL}/invoice`,invoice);
  }




}
