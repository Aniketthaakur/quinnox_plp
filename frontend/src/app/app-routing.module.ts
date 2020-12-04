import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AddClientLoginComponent } from "./add-client-login/add-client-login.component";
import { AddFlightComponent } from "./add-flight/add-flight.component";
import { BookedTicketComponent } from "./booked-ticket/booked-ticket.component";
import { ContactComponent } from "./contact/contact.component";
import { CustomerNotificationComponent } from "./customer-notification/customer-notification.component";
import { FlightScheduleComponent } from "./flight-schedule/flight-schedule.component";
import { GetCustomerComponent } from "./get-customer/get-customer.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ModifyCustomerComponent } from "./modify-customer/modify-customer.component";
import { ModifyFlightComponent } from "./modify-flight/modify-flight.component";
import { NotificationComponent } from "./notification/notification.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RegisterComponent } from "./register/register.component";
import { RescheduleTicketComponent } from "./reschedule-ticket/reschedule-ticket.component";
import { SeacrhFlightComponent } from "./seacrh-flight/seacrh-flight.component";
import { SecheduleFlightComponent } from "./sechedule-flight/sechedule-flight.component";
import { ViewAllFlightComponent } from "./view-all-flight/view-all-flight.component";
import { ViewBookedTicketComponent } from "./view-booked-ticket/view-booked-ticket.component";
import { ViewCustomerAllDetailsComponent } from "./view-customer-all-details/view-customer-all-details.component";
import { ViewCustomerBookedTicketComponent } from "./view-customer-booked-ticket/view-customer-booked-ticket.component";
import { ViewTicketComponent } from "./view-ticket/view-ticket.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "getCustomer", component: GetCustomerComponent },
  { path: "update/:customerId/:customerEmail/:customerName/:customerPhoneNumber/:customerAddress/:customerDOB/:customerNationality/:customerCity", component: ModifyCustomerComponent },
  { path: "addFlight", component: AddFlightComponent },
  { path: "getFlight", component: ViewAllFlightComponent },
  {
    path:
      "modify/:flightId/:sourceCity/:destinationCity/:takeOffTime/:arrivalTime/:priceOfFlight/:flightDay/:departuredate/:seat",
    component: ModifyFlightComponent,
  },
  { path: "schedule", component: FlightScheduleComponent },
  { path: "searchflight", component: SeacrhFlightComponent },
  { path: "sechduleflight", component: SecheduleFlightComponent },
  {
    path:
      "booked/:flightId/:sourceCity/:destinationCity/:takeOffTime/:arrivalTime/:departuredate/:seat",
    component: BookedTicketComponent,
  },
  { path: "viewticket", component: ViewTicketComponent },
  {
    path:
      "rescheduleticket/:ticketId/:customerId/:dateOfBooking/:sourceCity/:destinationCity/:flightId/:takeOffTime/:arrivalTime/:seat",
    component: RescheduleTicketComponent,
  },
  { path: "viewbookedticket", component: ViewBookedTicketComponent },
  { path: "addclientlogin", component: AddClientLoginComponent },
  {
    path: "viewallcustomerdetails",
    component: ViewCustomerAllDetailsComponent,
  },
  {
    path: "viewcustomerbookedticket",
    component: ViewCustomerBookedTicketComponent,
  },
  { path: "notification", component: NotificationComponent },
  { path: "customernotification", component: CustomerNotificationComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
