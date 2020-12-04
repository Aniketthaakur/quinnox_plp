package com.quinnox.airlinereservationsystem.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.quinnox.airlinereservationsystem.dto.CustomerResponse;
import com.quinnox.airlinereservationsystem.exception.CustomException;

@RestControllerAdvice
public class CustomerControllerAdvice {
	@ExceptionHandler(CustomException.class)
	public CustomerResponse handleCustomException(CustomException customException) {
		CustomerResponse customerResponse = new CustomerResponse();
		customerResponse.setStatusCode(501);
		customerResponse.setMessage("Exception");
		customerResponse.setDescription(customException.getMessage());
		return  customerResponse;
	}


}
