import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
  message: any;
  constructor(private auth: AuthenticationService,
    private router: Router) { }


    login(form: NgForm) {
      this.auth.loginUser(form.value).subscribe(res=>{
        console.log(res);
        if (res.statusCode === 201) {
          if (res.customer[0].userType === 'admin') {
            form.reset();
            this.message = 'you are logged in successfully';
            setTimeout(() => {
              this.message = null;
            }, 5000);
            console.log(res);
            localStorage.setItem('userDetails', JSON.stringify(res));
            console.log('user details stored in local storage');
            this.router.navigateByUrl('');
  
          }else {
          if (res.customer[0].userType === 'client') {
            form.reset();
            this.message = 'you are logged in';
            setTimeout(() => {
              this.message = null;
            }, 5000);
            console.log(res);
            localStorage.setItem('userDetails', JSON.stringify(res));
            console.log('user details stored in local storage');
            this.router.navigateByUrl('/about');
          }
          }
        }
      }, err => {
          this.error = 'Sorry!!please provide valid credentials';
          setTimeout(() => {
            this.error = null;
          }, 3000);
        
      })
    }
          

  ngOnInit() {
  }

}
