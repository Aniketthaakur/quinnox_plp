package com.quinnox.airlinereservationsystem.dto;

import java.util.List;

public class FlightResponse {

	private int statusCode;
	private String message;
	private String description;
	private List<Flight> flight;

	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public void setFlight(List flight) {
		this.flight = flight;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Flight> getFlight() {
		return flight;
	}

}
