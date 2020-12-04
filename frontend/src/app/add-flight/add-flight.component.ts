import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  message;
  description;

  constructor(private service: AdminService) { }

  ngOnInit() {
  }
  addFlight(form: NgForm){
    this.service.postData(form.value).subscribe(data=>{
      console.log(data);
      if (data.statusCode === 201) {
        this.message = data.description;
        setTimeout(() => {
          this.message = null;
        }, 2000);
        form.reset();
      } else {
        this.description = data.description;
        setTimeout(() => {
          this.description = null;
        }, 2000);
      }
    })
  }

}
