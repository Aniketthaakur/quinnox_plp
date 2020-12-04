package com.quinnox.airlinereservationsystem.dto;

import java.util.List;

public class AuthenticationResponse {

	private int statusCode;
	private String message;
	private String description;
	private List login;

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
	public void setCustomer(List login) {
		this.login = login;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Authentication> getCustomer() {
		return login;
	}

}
