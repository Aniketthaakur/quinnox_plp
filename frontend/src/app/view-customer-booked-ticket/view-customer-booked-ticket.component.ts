import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-view-customer-booked-ticket",
  templateUrl: "./view-customer-booked-ticket.component.html",
  styleUrls: ["./view-customer-booked-ticket.component.css"],
})
export class ViewCustomerBookedTicketComponent implements OnInit {
  success: string;
  failure: string;
  Flights: BookedTicket[];
  constructor(private service: AdminService, private router: Router) {}
  ngOnInit() {
    const customerId =localStorage.getItem('customerId');
    this.service.getCustomerTicket(customerId).subscribe((data) => {
      console.log(data);
      if (data.statusCode === 201) {
        this.Flights = data.bookedTicket;
        this.success = data.description;
        localStorage.setItem("TicketDetails", JSON.stringify(data));
        console.log("Ticket Details are Fetched");
        setTimeout(() => {
          this.success = null;
        }, 2000);
      } else {
        this.failure = data.description;
        localStorage.setItem("TicketDetails", JSON.stringify(data));
        console.log("Ticket Details are Added");
        setTimeout(() => {
          this.failure = null;
        }, 2000);
      }
    });
  }

  cancelflight(flight: BookedTicket) {
    alert(" Are You Sure Want To Cancel Ticket");
    this.service.cancelTicket(flight).subscribe((data) => {
      console.log(data);
      if (data.statusCode === 201) {
        this.Flights.splice(this.Flights.indexOf(flight), 1);
        this.success = data.description;
        setTimeout(() => {
          this.success = null;
        }, 2000);
      }
    },err => {
      this.failure = 'Sorry You cannot cancel this flight because this flight was already cancelled by Airline and your money will get back into your account within 7 working days Thank you';
      setTimeout(() => {
        this.failure = null;
      }, 9000);
    });
  }

  rescheduleflight(flight) {
    this.router.navigate(
      [
        `rescheduleticket/${flight.ticketId}/${flight.customerId}/${flight.dateOfBooking}/${flight.sourceCity}/${flight.destinationCity}/${flight.flightId}/${flight.takeOffTime}/${flight.arrivalTime}/${flight.seat}`,
      ],
      {
        queryParams: {
          ticketId: flight.ticketId,
          customerId: flight.customerId,
          dateOfBooking: flight.dateOfBooking,
          sourceCity: flight.sourceCity,
          destinationCity: flight.destinationCity,
          flightId: flight.flightId,
          takeOffTime: flight.takeOffTime,
          arrivalTime: flight.arrivalTime,
          seat:flight.seat
        },
      }
    );
  }
}
