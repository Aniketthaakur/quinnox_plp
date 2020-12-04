import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CutomerService } from '../cutomer.service';

@Component({
  selector: 'app-view-customer-all-details',
  templateUrl: './view-customer-all-details.component.html',
  styleUrls: ['./view-customer-all-details.component.css']
})
export class ViewCustomerAllDetailsComponent implements OnInit {
  success: string;
  failure: string;
  Customers: Customer[];

  constructor(private service: CutomerService,
    private route: Router) { 

    }

  ngOnInit() {
    this.service.getData().subscribe(res=>{
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
    this.route.navigate([`update/${customer.customerId}`],
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
