package com.quinnox.airlinereservationsystem.dto;

import java.util.List;

public class CustomerNotificationResponse {

	private int statusCode;
	private String message;
	private String description;
	private List<CustomerNotification> customerNotification;

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
	public void setNotification(List<CustomerNotification> customerNotification) {
		this.customerNotification = customerNotification;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<CustomerNotification> getNotification() {
		return customerNotification;
	}

}
