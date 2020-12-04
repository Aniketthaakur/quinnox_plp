import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  selectedFlightToUpdate: Flight;
  FlightName;
  api = 'http://localhost:8080';

  flightt: Flight;
  constructor(private http: HttpClient) { }

  postData(flightDetails): Observable<any> {
    return this.http.post<any>(`${this.api}/addflight`, flightDetails);
  }

  getData():Observable<any>{
    return this.http.get<any>(`${this.api}/flight`);
  }

  getFlightData(flight){
    this.flightt=flight;
    return flight;
  }

  deleteFlight(flight: Flight):Observable<any>{
    return this.http.delete<any>(`${this.api}/flight/${flight.flightId}`);
   }

   
  modifyFlight(flightDet): Observable<any> {
    return this.http.put<any>(`${this.api}/flight`, flightDet);
  }

  searchFlight(flightsearch): Observable<any>{
    return this.http.post<any>(`${this.api}/search`, flightsearch);
  }

  bookTicket(ticket): Observable<any>{
    return this.http.post<any>(`${this.api}/addticket`,ticket);
  }

  getTicket(): Observable<any>{
    return this.http.get<any>(`${this.api}/ticket`);
  }
  getCustomerTicket(customerId): Observable<any> {
    return this.http.get<any>(`${this.api}/ticket/${customerId}`);
  }
  cancelTicket(flight: BookedTicket): Observable<any>{
    return this.http.delete<any>(`${this.api}/ticket/${flight.ticketId}`);
   }

   modifyTicket(ticket): Observable<any> {
    return this.http.put<any>(`${this.api}/ticket`, ticket);
  }
   
  getNotification(): Observable<any>{
    return this.http.get<any>(`${this.api}/notification`);
  }
  
  getCustomerNotification(customerId): Observable<any>{
    return this.http.get<any>(`${this.api}/notification/${customerId}`);
  }
}
