package com.quinnox.airlinereservationsystem.dto;

import java.util.List;

public class BookedTicketResponse {

	private int statusCode;
	private String message;
	private String description;
	private List ticket;

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
	public void setBookedTicket(List ticket) {
		this.ticket = ticket;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<BookedTicket> getBookedTicket() {
		return ticket;
	}

}
