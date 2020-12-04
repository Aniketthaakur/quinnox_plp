import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isAdmin() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails && userDetails.customer[0].userType === 'admin') {
      return true;
    } else {
      return false;
    }
  }
  isClient() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails && userDetails.customer[0].userType === 'client') {
      localStorage.setItem('customerId',userDetails.customer[0].userId);
      return true;
    } else {
      return false;
    }
  }
  
  isLoggedIn() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem('userDetails');
    this.router.navigateByUrl('/');
  }
}



