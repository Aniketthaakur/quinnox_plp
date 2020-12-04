package com.quinnox.airlinereservationsystem.service;

import java.util.List;

import com.quinnox.airlinereservationsystem.dto.Flight;

public interface FlightService {

public boolean addFlight(Flight flight);
	
	public List<Flight> getAllFlight();
	
	public boolean updateFLight(Flight flight);
	
	public boolean deleteFlight(int id); 

	public Flight seacrhFlight(String sourceCity,String destinationCity);
}

