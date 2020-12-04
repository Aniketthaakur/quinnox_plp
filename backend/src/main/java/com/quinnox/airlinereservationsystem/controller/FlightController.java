package com.quinnox.airlinereservationsystem.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.airlinereservationsystem.dto.Authentication;
import com.quinnox.airlinereservationsystem.dto.AuthenticationResponse;
import com.quinnox.airlinereservationsystem.dto.Flight;
import com.quinnox.airlinereservationsystem.dto.FlightResponse;
import com.quinnox.airlinereservationsystem.service.FlightService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", allowCredentials = "true")
public class FlightController {

	@Autowired
	private FlightService service;
	
	
	@PostMapping("/addflight")
	public FlightResponse addFlight(@RequestBody Flight flight) {
		FlightResponse response=new FlightResponse();
		if(service.addFlight(flight)) {
			response.setStatusCode(201);
			response.setMessage("Flight scheduled added Succesfully");
			response.setDescription("Flight Added");
		}else {
			response.setStatusCode(401);
			response.setDescription("Flight Not Added");
			response.setMessage("Flight Not added");
		}
		return response;
	}
	
	@GetMapping("/flight")
	public FlightResponse getAllFlight() {
		FlightResponse response=new FlightResponse();
		List<Flight> flight=service.getAllFlight();
		if(flight.size()!=0) {
			response.setStatusCode(201);
			response.setMessage("Flight Details retrived Succesfully");
			response.setDescription("Flight Found");
			response.setFlight(flight);
		}else {
			response.setStatusCode(401);
			response.setDescription("Flight details Empty");
			response.setMessage("Flight Not Found");
		}
		return response;
		}
	
	@PutMapping("/flight")
	public FlightResponse updateFLight(@RequestBody Flight flight) {
		FlightResponse response=new FlightResponse();
		boolean update	=service.updateFLight(flight);
		if(update) {
			response.setStatusCode(201);
			response.setMessage("Flight Details Updated Succesfully");
			response.setDescription("Flight updated ");
			response.setFlight(Arrays.asList(flight));
		}else {
			response.setStatusCode(401);
			response.setDescription("Flight Not Updated");
			response.setMessage("Flight Failed To Update");
		}
		return response;
	}
	
	@DeleteMapping("/flight/{flightId}")
	public FlightResponse deleteFLight(@PathVariable("flightId")int flightId) {
		FlightResponse response=new FlightResponse();
		   boolean delete=service.deleteFlight(flightId);
		if(delete) {
			response.setStatusCode(201);
			response.setMessage("Flight Deleted Succesfully");
			response.setDescription("Flight Deleted ");
		}else {
			response.setStatusCode(401);
			response.setDescription("Flight Not Able to Delete");
			response.setMessage("Flight Failed To Delete");
		}
		return response;
		
	}
	
	@PostMapping("/search")
	public FlightResponse auth(@RequestBody Flight bean) {

		Flight loginBean= service.seacrhFlight(bean.getSourceCity(), bean.getDestinationCity());
		FlightResponse response=new FlightResponse();
		if(loginBean!=null) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("Flight  Found for Details");
			response.setFlight(Arrays.asList(loginBean));
		}else {
			response.setStatusCode(401);
			response.setMessage("failure");
			response.setDescription("Flight not found!!");
		}
		return response;
	}


}




