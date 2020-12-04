import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ViewAllFlightComponent } from './view-all-flight/view-all-flight.component';
import { ModifyFlightComponent } from './modify-flight/modify-flight.component';
import { BookedTicketComponent } from './booked-ticket/booked-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GetCustomerComponent } from './get-customer/get-customer.component';
import { ModifyCustomerComponent } from './modify-customer/modify-customer.component';
import { FlightScheduleComponent } from './flight-schedule/flight-schedule.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SeacrhFlightComponent } from './seacrh-flight/seacrh-flight.component';
import { SecheduleFlightComponent } from './sechedule-flight/sechedule-flight.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { RescheduleTicketComponent } from './reschedule-ticket/reschedule-ticket.component';
import { ViewBookedTicketComponent } from './view-booked-ticket/view-booked-ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material';
import { AddClientLoginComponent } from './add-client-login/add-client-login.component';
import { ViewCustomerAllDetailsComponent } from './view-customer-all-details/view-customer-all-details.component';
import { ViewCustomerBookedTicketComponent } from './view-customer-booked-ticket/view-customer-booked-ticket.component';
import { NotificationComponent } from './notification/notification.component';
import { CustomerNotificationComponent } from './customer-notification/customer-notification.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    RegisterComponent,
    AddFlightComponent,
    ViewAllFlightComponent,
    ModifyFlightComponent,
    BookedTicketComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    GetCustomerComponent,
    ModifyCustomerComponent,
    FlightScheduleComponent,
    PageNotFoundComponent,
    SeacrhFlightComponent,
    SecheduleFlightComponent,
    ViewTicketComponent,
    RescheduleTicketComponent,
    ViewBookedTicketComponent,
    AddClientLoginComponent,
    ViewCustomerAllDetailsComponent,
    ViewCustomerBookedTicketComponent,
    NotificationComponent,
    CustomerNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
