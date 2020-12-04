import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-seacrh-flight',
  templateUrl: './seacrh-flight.component.html',
  styleUrls: ['./seacrh-flight.component.css']
})
export class SeacrhFlightComponent implements OnInit {

  success: string;
  failure: string;
  Flights: Flight[];
  constructor(private service: AdminService,
    private router: Router) { }

  ngOnInit() {
   const flight = JSON.parse(localStorage.getItem('seacrhFlight'));
   this.Flights=flight;  
   console.log(this.Flights);
    }
  }


