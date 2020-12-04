package com.quinnox.airlinereservationsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.airlinereservationsystem.dao.FlightDAO;
import com.quinnox.airlinereservationsystem.dto.Flight;

@Service
public class FlightServiceImpl implements FlightService {

	@Autowired
	private FlightDAO dao;

	@Override
	public boolean addFlight(Flight flight) {
		return dao.addFlight(flight);
	}

	@Override
	public List<Flight> getAllFlight() {
		return dao.getAllFlight();
	}

	@Override
	public boolean updateFLight(Flight flight) {
		return dao.updateFLight(flight);
	}

	@Override
	public boolean deleteFlight(int id) {
		return dao.deleteFlight(id);
	}

	@Override
	public Flight seacrhFlight(String sourceCity, String destinationCity) {
		return dao.seacrhFlight(sourceCity, destinationCity);
	}
	
	
}
