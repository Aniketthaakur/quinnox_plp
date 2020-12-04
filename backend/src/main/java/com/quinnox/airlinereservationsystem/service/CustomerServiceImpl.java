package com.quinnox.airlinereservationsystem.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.airlinereservationsystem.dao.CustomerDAO;
import com.quinnox.airlinereservationsystem.dto.BookedTicket;
import com.quinnox.airlinereservationsystem.dto.Customer;
import com.quinnox.airlinereservationsystem.dto.CustomerNotification;

@Service
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	public CustomerDAO dao;
	
	@Override
	public boolean registerCustomer(Customer customer) {
		return dao.registerCustomer(customer);
	}

	@Override
	public List<Customer> getAllCustomer() {
		return dao.getAllCustomer();
	}

	@Override
	public boolean updateCustomer(Customer customer) {
		return dao.updateCustomer(customer);
	}

	@Override
	public boolean cancelFlight(int ticketId) {
		return dao.cancelFlight(ticketId);
	}

	@Override
	public boolean updateTicket(BookedTicket ticket) {
		return dao.updateTicket(ticket);
	}

	@Override
	public Customer searchCustomers(int customerId) {
		return dao.searchCustomers(customerId);
	}

	@Override
	public List<CustomerNotification> getCustomerNotification(int customerId) {
		return dao.getCustomerNotification(customerId);
	}

}
