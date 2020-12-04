import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-booked-ticket",
  templateUrl: "./booked-ticket.component.html",
  styleUrls: ["./booked-ticket.component.css"],
})
export class BookedTicketComponent implements OnInit {
  flightIds;
  sourceCitys;
  destinationCitys;
  takeOffTimes;
  arrivalTimes;
  priceOfFlights;
  flightDays;
  customerIds;
  dateOfBookings;
  success;
  failure;
  constructor(
    private service: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((data) => {
      this.flightIds = data.flightId;
      this.sourceCitys = data.sourceCity;
      this.destinationCitys = data.destinationCity;
      this.takeOffTimes = data.takeOffTime;
      this.arrivalTimes = data.arrivalTime;
      this.customerIds = localStorage.getItem("customerId");
      this.dateOfBookings = data.departuredate;
      console.log(data.departuredate)
    });
  }
  ngOnInit() {}

  bookedFlight(form: NgForm) {
    console.log(form.value);
    this.service.bookTicket(form.value).subscribe((data) => {
      console.log(data);
      if (data.statusCode === 201) {
        this.success = data.message;
        setTimeout((data) => {
          window.location.reload;
        }, 2000);
        this.router.navigateByUrl("/schedule");
      } else {
        this.failure = data.message;
        setTimeout((data) => {
          window.location.reload;
        }, 2000);
        this.router.navigateByUrl("/schedule");
      }
    });
  }
}
