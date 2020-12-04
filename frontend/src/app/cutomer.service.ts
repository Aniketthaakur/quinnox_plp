import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CutomerService {

  selectedCustomerToUpdate: Customer;
  customerName;
  api = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  postData(customerDetails): Observable<any> {
    return this.http.post<any>(
      `${this.api}/register`, customerDetails
    );
  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.api}/customers`);
  }

  modifyCustomer(customerDet): Observable<any> {
    return this.http.put<any>(`${this.api}/customer`, customerDet);
  }
  getCustomer(id): Observable<any> {
    return this.http.get<any>(`${this.api}/customer/${id}`);
  }
}
