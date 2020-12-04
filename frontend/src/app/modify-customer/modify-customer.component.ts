import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CutomerService } from '../cutomer.service';

@Component({
  selector: 'app-modify-customer',
  templateUrl: './modify-customer.component.html',
  styleUrls: ['./modify-customer.component.css']
})
export class ModifyCustomerComponent implements OnInit {

  customerIds;
  customerEmails;
  customerNames;
  customerPhoneNumbers;
  customerAddresss;
  customerDOBs;
  customerNationalitys;
  customerCitys;
  customerPasswords;
  genders;
  constructor(private service: CutomerService,
    private router: Router,private activatedRoute:ActivatedRoute) { 
      activatedRoute.params.subscribe(data=>{
        console.log(data);
        this.customerIds=data.customerId;
        this.customerEmails=data.customerEmail;
        this.customerNames=data.customerName;
        this.customerNationalitys=data.customerNationality;
        this.customerPhoneNumbers=data.customerPhoneNumber;
        this.customerCitys=data.customerCity;
        this.customerDOBs=data.customerDOB;
        this.customerAddresss=data.customerAddress;
        this.genders=data.gender;
      })
    }

  ngOnInit() {
  }

  modifyCustomer(form:NgForm){
    this.service.modifyCustomer(form.value).subscribe(data=>{
      console.log(data);
      if(data.statusCode===201){
        this.router.navigateByUrl('/getCustomer');
      }
    })
  }

}
