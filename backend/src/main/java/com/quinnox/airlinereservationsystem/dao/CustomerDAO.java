package com.quinnox.airlinereservationsystem.dao;

import java.util.List;

import com.quinnox.airlinereservationsystem.dto.BookedTicket;
import com.quinnox.airlinereservationsystem.dto.Customer;
import com.quinnox.airlinereservationsystem.dto.CustomerNotification;

public interface CustomerDAO {

	public boolean registerCustomer(Customer customer);
	
	public List<Customer> getAllCustomer();
	
	public boolean updateCustomer(Customer customer);
	
	public boolean cancelFlight(int ticketId);
	
	public boolean updateTicket(BookedTicket ticket);
	
	public Customer searchCustomers(int customerId);
	
	public List<CustomerNotification> getCustomerNotification(int customerId);
}
