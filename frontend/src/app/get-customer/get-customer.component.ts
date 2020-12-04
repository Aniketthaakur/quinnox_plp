import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CutomerService } from '../cutomer.service';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {

  success: string;
  failure: string;
  Customers: Customer[];
  custId;
  constructor(private service: CutomerService,
    private route: Router) { 
      this.custId=localStorage.getItem('customerId');
    }

  ngOnInit() {
    this.service.getCustomer(this.custId).subscribe(res=>{
      console.log(res);
      if (res.statusCode === 201) {
        this.Customers = res.customer;
        this.success = res.description;
        localStorage.setItem('CustomerDetails', JSON.stringify(res));
        console.log('Customer Details are Fetched');
        console.log(res);
        setTimeout(() => {
          this.success = null;
        }, 2000);
      }else{
        this.failure = res.description;
        localStorage.setItem('CustomerDetails', JSON.stringify(res));
        console.log('Customer Details are Added');
        setTimeout(() => {
          this.failure = null;
        }, 2000);
      }
      
    });
   }


   modifycustomer(customer) {
    this.route.navigate([`update/${customer.customerId}/${customer.customerEmail}/${customer.customerName}/${customer.customerPhoneNumber}/${customer.customerAddress}/${customer.customerDOB}/${customer.customerNationality}/${customer.customerCity}`],
      {
        queryParams: {
          customerId:customer.customerId,
          customerEmail:customer.customerEmail,
          customerName:customer.customerName,
          customerPhoneNumber:customer.customerPhoneNumber,
          customerAddress:customer.customerAddress,
          customerDOB:customer.customerDOB,
          customerNationality:customer.customerNationality,
          customerCity:customer.customerCity,
          customerPassword:customer.customerPassword,
          gender:customer.gender

        }
      }
    );
  }
 
  
}
