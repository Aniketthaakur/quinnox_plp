package com.quinnox.airlinereservationsystem.dto;

import java.util.List;



public class CustomerResponse {
	
	private int statusCode;
	private String message;
	private String description;
	private List customer;

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
	public void setCustomer(List customer) {
		this.customer = customer;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Customer> getCustomer() {
		return customer;
	}


}
