package com.quinnox.airlinereservationsystem.controller;

import java.util.Arrays;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.airlinereservationsystem.dto.BookedTicket;
import com.quinnox.airlinereservationsystem.dto.BookedTicketResponse;
import com.quinnox.airlinereservationsystem.dto.Customer;
import com.quinnox.airlinereservationsystem.dto.CustomerNotification;
import com.quinnox.airlinereservationsystem.dto.CustomerNotificationResponse;
import com.quinnox.airlinereservationsystem.dto.CustomerResponse;
import com.quinnox.airlinereservationsystem.dto.Flight;
import com.quinnox.airlinereservationsystem.dto.FlightResponse;
import com.quinnox.airlinereservationsystem.dto.Notification;
import com.quinnox.airlinereservationsystem.dto.NotificationResponse;
import com.quinnox.airlinereservationsystem.service.CustomerService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", allowCredentials = "true")
public class CustomerController {

	@Autowired
	public CustomerService service;
	
	@PostMapping("/register")
	public CustomerResponse registerCustomer(@RequestBody Customer customer) {
			CustomerResponse responce=new CustomerResponse();
		if(service.registerCustomer(customer)) {
			responce.setStatusCode(201);
			responce.setMessage("Customer Registration Form Submitted Succesfully");
			responce.setDescription("Customer Added");
			responce.setCustomer(Arrays.asList(customer));
		}else {
			responce.setStatusCode(401);
			responce.setDescription("Customer Not Added");
			responce.setMessage("Customer Registration Form Failure to submit");
		}
		return responce;
	}
	
	@GetMapping("/customers")
	public CustomerResponse getCustomer() {
		CustomerResponse responce=new CustomerResponse();
		List<Customer>	customer=service.getAllCustomer();
	if(customer.size()!=0) {
		responce.setStatusCode(201);
		responce.setMessage("Customer Details Find Succesfully");
		responce.setDescription("Customer Details Found");
		responce.setCustomer(customer);
	}else {
		responce.setStatusCode(401);
		responce.setDescription("Customer Are Not Available");
		responce.setMessage("Customer Empty No Data Found");
	}
	return responce;
	}
	@PutMapping("/customer")
	public CustomerResponse updateCustomer(@RequestBody Customer customer) {
		CustomerResponse responce=new CustomerResponse();
		boolean updateCustomer=service.updateCustomer(customer);
	if(updateCustomer) {
		responce.setStatusCode(201);
		responce.setMessage("Customer Details Updated Succesfully");
		responce.setDescription("Customer Details update");
		responce.setCustomer(Arrays.asList(customer));
	}else {
		responce.setStatusCode(401);
		responce.setDescription("Customer Are Not Available");
		responce.setMessage("Customer Data Not Updated");
	}
	return responce;
}
	
	@DeleteMapping("/ticket/{ticketId}")
	public BookedTicketResponse deleteFLight(@PathVariable("ticketId")int ticketId) {
		BookedTicketResponse response=new BookedTicketResponse();
		   boolean delete=service.cancelFlight(ticketId);
		if(delete) {
			response.setStatusCode(201);
			response.setMessage("Ticket Cancelled Succesfully");
			response.setDescription("Ticket Cancelled ");
		}else {
			response.setStatusCode(401);
			response.setDescription("Ticket Not Able to Cancel");
			response.setMessage("Ticket Failed To Cancel");
		}
		return response;
		
	}
	
	
	@PutMapping("/ticket")
	public BookedTicketResponse updateFLight(@RequestBody BookedTicket ticket) {
		BookedTicketResponse response=new BookedTicketResponse();
		boolean update	=service.updateTicket(ticket);
		if(update) {
			response.setStatusCode(201);
			response.setMessage("Ticket Details Updated Succesfully");
			response.setDescription("Ticket updated ");
			response.setBookedTicket(Arrays.asList(ticket));
		}else {
			response.setStatusCode(401);
			response.setDescription("Ticket Not Updated");
			response.setMessage("Ticket Failed To Update");
		}
		return response;
	}
	
	@GetMapping(path="/customer/{customerId}")
	public CustomerResponse searchCustomer(@PathVariable("customerId") int customerId) {
		CustomerResponse customerResponse = new CustomerResponse();
		Customer customers = service.searchCustomers(customerId);
		if(customers!=null) {
			customerResponse.setStatusCode(201);
			customerResponse.setDescription("Customer Found");
			customerResponse.setMessage("Success");
			customerResponse.setCustomer(Arrays.asList(customers));	

		}else {
			customerResponse.setStatusCode(401);
			customerResponse.setMessage("Failure");
			customerResponse.setDescription("Customer Details not found");

		}
		return customerResponse;
	}
	
	@GetMapping("/notification/{customerId}")
	public CustomerNotificationResponse getNotification(@PathVariable("customerId")int customerId) {
		
		CustomerNotificationResponse responce=new CustomerNotificationResponse();
		List<CustomerNotification> notification=service.getCustomerNotification(customerId);
		if(notification.size()!=0) {
			responce.setStatusCode(201);
			responce.setMessage("Notification Found Succesfully");
			responce.setDescription("Notification Found");
			responce.setNotification(notification);
		}else {
			responce.setStatusCode(401);
			responce.setDescription("No notification Found");
			responce.setMessage("No new notification found");
		}
		return responce;	
	}
}
