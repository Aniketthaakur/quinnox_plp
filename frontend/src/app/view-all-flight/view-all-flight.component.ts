import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-all-flight',
  templateUrl: './view-all-flight.component.html',
  styleUrls: ['./view-all-flight.component.css']
})
export class ViewAllFlightComponent implements OnInit {

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

  deleteflight(flight: Flight){
    this.service.deleteFlight(flight).subscribe(data=>{
      console.log(data)
      if(data.statusCode===201) {
        this.Flights.splice(this.Flights.indexOf(flight),1);
        this.success=data.flight;
        setTimeout(() => {
          this.success= null;
        },2000)
      }
    })
  }

  modifyflight(flight) {
    this.router.navigate([`modify/${flight.flightId}/${flight.sourceCity}/${flight.destinationCity}/${flight.takeOffTime}/${flight.arrivalTime}/${flight.priceOfFlight}/${flight.flightDay}/${flight.departuredate}/${flight.seat}`],
    {
      queryParams: {
        flightId: flight.flightId,
        sourceCity: flight.sourceCity,
        destinationCity: flight.destinationCity,
        takeOffTime: flight.takeOffTime,
        arrivalTime: flight.arrivalTime,
        priceOfFlight: flight.priceOfFlight,
        flightDay: flight.flightDay,
        departuredate :flight.departuredate,
        seat:flight.seat

      }
    }
    );
      }

}
