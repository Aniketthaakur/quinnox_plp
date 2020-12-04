package com.quinnox.airlinereservationsystem.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "customer")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="customerId")
	private int customerId;
	
	@Column(name="customerName")
	private String customerName;
	
	@Column(name="customerEmail")
	private String customerEmail;
	
	@Column(name="customerPhoneNumber")
	private String customerPhoneNumber;
	
	@Column(name="customerAddress")
	private String customerAddress;
	
	@Column(name="customerDOB")
	private String customerDOB;
	
	@Column(name="customerNationality")
	private String customerNationality;
	
	@Column(name="customerCity")
	private String customerCity;
	
	@Column(name="customerPassword")
	private String customerPassword;
	
	@Column(name = "gender")
	private String gender;
	
	
	
}
