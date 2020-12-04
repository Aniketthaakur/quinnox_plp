import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-booked-ticket',
  templateUrl: './view-booked-ticket.component.html',
  styleUrls: ['./view-booked-ticket.component.css']
})
export class ViewBookedTicketComponent implements OnInit {


  success: string;
  failure: string;
  Flights: BookedTicket[];
  constructor(private service: AdminService,
    private router: Router) { }

  ngOnInit() {

    this.service.getTicket().subscribe(data=>{
      console.log(data);
      if (data.statusCode === 201) {
        this.Flights = data.bookedTicket;
        this.success = data.description;
        localStorage.setItem('TicketDetails', JSON.stringify(data));
        console.log('Ticket Details are Fetched');
        setTimeout(() => {
          this.success = null;
        }, 2000);
      }else{
        this.failure = data.description;
        localStorage.setItem('TicketDetails', JSON.stringify(data));
        console.log('Ticket Details are Added');
        setTimeout(() => {
          this.failure = null;
        }, 2000);
      }
    })
  }

}
