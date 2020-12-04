package com.quinnox.airlinereservationsystem.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import lombok.Data;

@Entity
@Data
@Table(name = "bookedTicket")
public class BookedTicket {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	@Column(name="ticketId")
	private int ticketId;

	@Column(name="")
	private int customerId;

	@Column(name="")
	private String dateOfBooking;
	
	@Column(name="sourceCity")
	private String sourceCity;
	
	@Column(name="destinationCity")
	private String destinationCity;
	
	@Column(name="flightId")
	private int flightId;
	
	@Column(name="takeOffTime")
	private String takeOffTime;

	@Column(name="arrivalTime")
	private String arrivalTime;
	
	@Column(name = "seat")
	private String seat;


}
