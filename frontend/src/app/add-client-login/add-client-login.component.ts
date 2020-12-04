import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-add-client-login',
  templateUrl: './add-client-login.component.html',
  styleUrls: ['./add-client-login.component.css']
})
export class AddClientLoginComponent implements OnInit {
  userTypes;
  emails;
  passwords;
  userIds;
  constructor(private service:AuthenticationService, private router:Router) { 
      this.emails=localStorage.getItem('email');
      this.passwords=localStorage.getItem('password');
      this.userTypes=localStorage.getItem('usertype');
      this.userIds=localStorage.getItem('customerId');
    
  }
  addCustomer(form:NgForm){
  this.service.loginUser(form.value).subscribe(data=>{
    console.log(data)
    if(data.statusCode===201){
        this.router.navigateByUrl('/login');
    }
  })
}
  ngOnInit() {
    
  }

}
