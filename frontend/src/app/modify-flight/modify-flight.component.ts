import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-modify-flight',
  templateUrl: './modify-flight.component.html',
  styleUrls: ['./modify-flight.component.css']
})
export class ModifyFlightComponent implements OnInit {
  flightIds;
  sourceCitys;
  destinationCitys;
  takeOffTimes;
  arrivalTimes;
  priceOfFlights;
  flightDays;
  seats;
  departuredates;
  constructor(private service: AdminService,
    private router: Router,private activatedRoute:ActivatedRoute) {
      activatedRoute.params.subscribe(data=> {
        console.log(data)
        this.flightIds=data.flightId;
        this.sourceCitys=data.sourceCity;
        this.destinationCitys=data.destinationCity;
        this.flightDays=data.flightDay;
        this.priceOfFlights=data.priceOfFlight;
        this.takeOffTimes=data.takeOffTime;
        this.arrivalTimes=data.arrivalTime;
        this.seats=data.seat;
        this.departuredates=data.departuredate;
      });
     }
      
  ngOnInit() {
  }
  modifyFlight(form: NgForm){
    this.service.modifyFlight(form.value).subscribe(data=>{
      console.log(data);
      if(data.statusCode===201){
        this.router.navigateByUrl('/getFlight');
      }
    })
  }

}
