import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message;
  description;
  constructor(private service: AdminService,
    private route: Router) { }

  ngOnInit() {
  }
  searchFlight(form: NgForm) {
    console.log(form);
    this.service.searchFlight(form.value).subscribe(data => {
      console.log(data);
      if(data.statusCode===201){
        this.message = data.description;
        localStorage.setItem('seacrhFlight',JSON.stringify(data.flight));
        setTimeout(() => {
          this.route.navigateByUrl('/searchflight');
          this.message = null;
        }, 2000);
        form.reset();
      } else {
        this.description = data.description;
        setTimeout(() => {
          this.description = null;
        }, 2000);
      }}, err => {
        this.description = 'Sorry!! No Flight Found In This Route';
        setTimeout(() => {
          this.description = null;
        }, 3000);
      }
    );
  }
    
    
  
}
