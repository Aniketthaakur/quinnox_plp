package com.quinnox.airlinereservationsystem.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "CustomerNotification")
public class CustomerNotification {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "customerNotificationId")
	private int customerNotificationId;
	
	@Column(name = "customerNotification")
	private String customerNotification;
	
	@Column(name = "customerId")
	private int customerId;
}
