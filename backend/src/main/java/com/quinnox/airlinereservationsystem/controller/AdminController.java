package com.quinnox.airlinereservationsystem.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.airlinereservationsystem.dto.Authentication;
import com.quinnox.airlinereservationsystem.dto.AuthenticationResponse;
import com.quinnox.airlinereservationsystem.dto.BookedTicket;
import com.quinnox.airlinereservationsystem.dto.BookedTicketResponse;
import com.quinnox.airlinereservationsystem.dto.Notification;
import com.quinnox.airlinereservationsystem.dto.NotificationResponse;
import com.quinnox.airlinereservationsystem.service.AdminService;

@CrossOrigin(origins = "*", allowedHeaders = "*", allowCredentials = "true")
@RestController
public class AdminController {

	@Autowired
	private AdminService service;
	
	@PostMapping("/login")
	public AuthenticationResponse addlogin(@RequestBody Authentication authentication) {
		AuthenticationResponse responce=new AuthenticationResponse();
		if(service.addLogin(authentication)) {
			responce.setStatusCode(201);
			responce.setMessage("Admin Added Succesfully");
			responce.setDescription("Admin Added");
		}else {
			responce.setStatusCode(401);
			responce.setDescription("Admin Not Added");
			responce.setMessage("Failed to add");
		}
		return responce;	
	}	
	@GetMapping("/login")
public AuthenticationResponse getlogin() {
		
		AuthenticationResponse responce=new AuthenticationResponse();
		List<Authentication> auth=service.getLogin();
		if(auth.size()!=0) {
			responce.setStatusCode(201);
			responce.setMessage("Admin Found Succesfully");
			responce.setDescription("Admin Found");
		}else {
			responce.setStatusCode(401);
			responce.setDescription("Admin Not Found");
			responce.setMessage("Failed to Found Admin");
		}
		return responce;	
	}
	
	
	@PostMapping(path = "/login-user")
	public AuthenticationResponse auth(@RequestBody Authentication bean) {

		Authentication loginBean= service.auth(bean.getEmail(), bean.getPassword());
		AuthenticationResponse response=new AuthenticationResponse();
		if(loginBean!=null) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("User found for the credentials");
			response.setCustomer(Arrays.asList(loginBean));
		}else {
			response.setStatusCode(401);
			response.setMessage("failure");
			response.setDescription("Credentials invalid");
		}
		return response;
	}
	
	
	@PostMapping("/addticket")
	public BookedTicketResponse addTicket(@RequestBody BookedTicket ticket) {
		
		BookedTicketResponse responce=new BookedTicketResponse();
		BookedTicket ticketreturn=service.addBookedTicket(ticket);
		if(ticketreturn!=null) {
			responce.setStatusCode(201);
			responce.setMessage("Ticket Added Succesfully");
			responce.setDescription("Ticket Added");
			responce.setBookedTicket(Arrays.asList(ticketreturn));
		}else {
			responce.setStatusCode(401);
			responce.setDescription("Ticket Not Added");
			responce.setMessage("Failed to add Ticket");
		}
		return responce;	
	}	
	
	@GetMapping("/ticket")
	public BookedTicketResponse getTicket() {
		
		BookedTicketResponse responce=new BookedTicketResponse();
		List<BookedTicket> ticket=service.getTicket();
		if(ticket.size()!=0) {
			responce.setStatusCode(201);
			responce.setMessage("Ticket Found Succesfully");
			responce.setDescription("Ticket Found");
			responce.setBookedTicket(ticket);
		}else {
			responce.setStatusCode(401);
			responce.setDescription("Ticket Not Found");
			responce.setMessage("Failed to Found Ticket");
		}
		return responce;	
	}
	
	@GetMapping("/ticket/{customerId}")
	public BookedTicketResponse getTicket(@PathVariable("customerId")int customerId) {
		
		BookedTicketResponse responce=new BookedTicketResponse();
		List<BookedTicket> ticket=service.getTicket(customerId);
		if(ticket.size()!=0) {
			responce.setStatusCode(201);
			responce.setMessage("Ticket Found Succesfully");
			responce.setDescription("Ticket Found");
			responce.setBookedTicket(ticket);
		}else {
			responce.setStatusCode(401);
			responce.setDescription("Ticket Not Found");
			responce.setMessage("Failed to Found Ticket");
		}
		return responce;	
	}
	
	
	@GetMapping("/notification")
	public NotificationResponse getNotification() {
		
		NotificationResponse responce=new NotificationResponse();
		List<Notification> notification=service.getAllNotifications();
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
