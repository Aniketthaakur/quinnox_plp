import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CutomerService } from '../cutomer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  constructor(private service: CutomerService,private route:Router) { }

  ngOnInit() {
  }
  addCustomer(form: NgForm){
    this.service.postData(form.value).subscribe(res=>{
      console.log(res);
      console.log(res.customer[0].customerEmail);
      form.reset();
      if(res.statusCode === 201) {
          localStorage.setItem('email', res.customer[0].customerEmail);
          localStorage.setItem('password', res.customer[0].customerPassword)
          localStorage.setItem('usertype','client');
          localStorage.setItem('customerId',res.customer[0].customerId)
          this.route.navigateByUrl('/addclientlogin');

        }
    });
  }

}
