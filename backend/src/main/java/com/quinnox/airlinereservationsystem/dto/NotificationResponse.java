package com.quinnox.airlinereservationsystem.dto;

import java.util.List;

public class NotificationResponse {

	private int statusCode;
	private String message;
	private String description;
	private List<Notification> notification;

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
	public void setNotification(List<Notification> notification) {
		this.notification = notification;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Notification> getNotification() {
		return notification;
	}

}
