import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-reschedule-ticket",
  templateUrl: "./reschedule-ticket.component.html",
  styleUrls: ["./reschedule-ticket.component.css"],
})
export class RescheduleTicketComponent implements OnInit {
  ticketIds;
  flightIds;
  sourceCitys;
  destinationCitys;
  takeOffTimes;
  arrivalTimes;
  customerIds;
  dateOfBookings;
  seats;

  success;
  failure;
  constructor(
    private service: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((data) => {
      console.log(data);
      this.ticketIds = data.ticketId;
      this.flightIds = data.flightId;
      this.sourceCitys = data.sourceCity;
      this.destinationCitys = data.destinationCity;
      this.takeOffTimes = data.takeOffTime;
      this.arrivalTimes = data.arrivalTime;
      this.customerIds = data.customerId;
      this.dateOfBookings = data.dateOfBooking;
      this.seats=data.seat;
    });
  }

  ngOnInit() {}

  rescheduleTicke(form:NgForm){
    this.service.modifyTicket(form.value).subscribe(data=>{
      console.log(data);
      if(data.statusCode===201){
        this.success=data.message;
        setTimeout(data=>{
          window.location.reload;
        },2000);
        this.router.navigateByUrl('/viewcustomerbookedticket')
      }else{
        this.failure=data.message;
        setTimeout(data=>{
          window.location.reload;
        },2000);
        this.router.navigateByUrl('/viewcustomerbookedticket')
      }
      
    })
  }
}
