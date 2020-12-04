package com.quinnox.airlinereservationsystem.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


@Entity 
@Data
@Table(name="authentication")
public class Authentication {
	
	@Id
	@Column(name = "userId")
	private String userId;
	
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "userType")
	private String userType;
	
}
