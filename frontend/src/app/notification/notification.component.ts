import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  message1;
  message2;
  message3;
  message4;
  message5;  message6;  message7;  message8;
  message9;  message10;
  constructor(private service:AdminService) { 
    this.service.getNotification().subscribe(data=>{
      console.log(data);
      console.log(data.notification)
      this.message1=data.notification[0].notificaton;
      this.message2=data.notification[1].notificaton;
      this.message3=data.notification[2].notificaton;
      this.message4=data.notification[3].notificaton;
      this.message5=data.notification[4].notificaton;
      this.message6=data.notification[5].notificaton;
      this.message7=data.notification[6].notificaton;
      this.message8=data.notification[7].notificaton;
      this.message9=data.notification[8].notificaton;
      this.message10= data.notification[9].notificaton;
      console.log(this.message1)
    })
  }

  ngOnInit() {
  }

}
