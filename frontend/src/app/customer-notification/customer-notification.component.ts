import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-customer-notification',
  templateUrl: './customer-notification.component.html',
  styleUrls: ['./customer-notification.component.css']
})
export class CustomerNotificationComponent implements OnInit {
  message1;
  message2;
  message3;
  message4;
  message5;  message6;  message7;  message8;
  message9;  message10;
  constructor(private service:AdminService,private router:Router) { 
        const customerId=localStorage.getItem('customerId');
        console.log(customerId)
    this.service.getCustomerNotification(customerId).subscribe(data=>{
      console.log(data);
      console.log(data.notification)
      this.message1=data.notification[0].customerNotification;
      this.message2=data.notification[1].customerNotification;
      this.message3=data.notification[2].customerNotification;
      this.message4=data.notification[3].customerNotification;
      this.message5=data.notification[4].customerNotification;
      this.message6=data.notification[5].customerNotification;
      this.message7=data.notification[6].customerNotification;
      this.message8=data.notification[7].customerNotification;
      this.message9=data.notification[8].customerNotification;
      this.message10= data.notification[9].customerNotification;
      setTimeout(data=>{
        this.router.navigateByUrl('');
      },5000)
    })
  }
  ngOnInit() {
  }

}
