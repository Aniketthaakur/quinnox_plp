import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-sechedule-flight',
  templateUrl: './sechedule-flight.component.html',
  styleUrls: ['./sechedule-flight.component.css']
})
export class SecheduleFlightComponent implements OnInit {

  success: string;
  failure: string;
  Flights: Flight[];
  constructor(private service: AdminService,
    private router: Router) { }

  ngOnInit() {
    this.service.getData().subscribe(data=>{
      console.log(data);
      if (data.statusCode === 201) {
        this.Flights = data.flight;
        this.success = data.description;
        localStorage.setItem('FlightDetails', JSON.stringify(data));
        console.log('Flight Details are Fetched');
        setTimeout(() => {
          this.success = null;
        }, 2000);
      }else{
        this.failure = data.description;
        localStorage.setItem('FlightDetails', JSON.stringify(data));
        console.log('Flight Details are Added');
        setTimeout(() => {
          this.failure = null;
        }, 2000);
      }
    })
  }
}
