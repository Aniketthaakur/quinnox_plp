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
@Table(name="flight")
public class Flight {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="flightId")
	private int flightId;
	
	@Column(name="sourceCity")
	private String sourceCity;
	
	@Column(name="destinationCity")
	private String destinationCity;
	
	@Column(name="takeOffTime")
	private String takeOffTime;
	
	@Column(name="arrivalTime")
	private String arrivalTime;
	
	@Column(name="priceOfFlight")
	private String priceOfFlight;
	
	@Column(name="flightDay")
	private String flightDay;
	
	@Column(name = "seat")
	private String seat;
	
	@Column(name="departuredate")
	private String departuredate;
}
