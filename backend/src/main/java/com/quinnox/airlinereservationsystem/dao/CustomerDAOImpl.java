package com.quinnox.airlinereservationsystem.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.airlinereservationsystem.dto.Authentication;
import com.quinnox.airlinereservationsystem.dto.BookedTicket;
import com.quinnox.airlinereservationsystem.dto.Customer;
import com.quinnox.airlinereservationsystem.dto.CustomerNotification;
import com.quinnox.airlinereservationsystem.dto.Flight;
import com.quinnox.airlinereservationsystem.exception.CustomException;


@Repository
public class CustomerDAOImpl implements CustomerDAO{

	@Autowired
	EntityManager manager;

	@Override
	@Transactional
	public boolean registerCustomer(Customer customer) {
			manager.persist(customer);
			Authentication auth=new Authentication();
		      auth.setEmail(customer.getCustomerEmail());
		      auth.setPassword(customer.getCustomerPassword());
		      auth.setUserId(Integer.toString(customer.getCustomerId()));
		      System.out.println(customer.getCustomerId());
		      auth.setUserType("client");
		      manager.persist(auth);
			return true;
	}

	@Override
	public List<Customer> getAllCustomer() {
		TypedQuery<Customer> query = manager.createQuery("From Customer", Customer.class);
		return query.getResultList();
	}

	@Override
	@Transactional
	public boolean updateCustomer(Customer customer) {
		Customer customer1=manager.find(Customer.class, customer.getCustomerId());
		Authentication auth=manager.find(Authentication.class,Integer.toString(customer.getCustomerId()));
		if(customer1 !=null) {
			customer1.setCustomerAddress(customer.getCustomerAddress());
			customer1.setCustomerCity(customer.getCustomerCity());
			customer1.setCustomerDOB(customer.getCustomerDOB());
			customer1.setCustomerEmail(customer.getCustomerEmail());
			customer1.setCustomerName(customer.getCustomerName());
			customer1.setCustomerNationality(customer.getCustomerNationality());
			customer1.setCustomerPassword(customer.getCustomerPassword());
			customer1.setCustomerPhoneNumber(customer.getCustomerPhoneNumber());
			auth.setEmail(customer.getCustomerEmail());
			auth.setPassword(customer.getCustomerPassword());
			return true;
		}else {
			throw new CustomException("Please enter valid customer id");
		}
	}

	@Override
	@Transactional
	public boolean cancelFlight(int ticketId) {
		BookedTicket flight=manager.find(BookedTicket.class, ticketId);
		int seat=Integer.parseInt(flight.getSeat());
		 Flight  originalFLight= manager.find(Flight.class, flight.getFlightId());
		 int seatinflight=Integer.parseInt(originalFLight.getSeat());
		 int finalSeat=seatinflight+seat;
			CustomerNotification notification=new CustomerNotification();
			//total amonut
			  int price=Integer.parseInt(originalFLight.getPriceOfFlight());
			  int totalAmount=price*seat;
			 float recieveAmount=(float) (totalAmount*0.9);
			
		if(flight!=null) {
			originalFLight.setSeat(Integer.toString(finalSeat));
			notification.setCustomerId(flight.getCustomerId());
			notification.setCustomerNotification("You had cancelled your flight with ticket id: "+ticketId+" and Flight Id:"+flight.getFlightId()+" travelling from "+flight.getSourceCity()+" to "+flight.getDestinationCity()+" on "+flight.getDateOfBooking()+" and your sum of amount is "+totalAmount+" and you will get 10% deduction of total amount according to the airline rule, and the Amount which you recieve is: "+recieveAmount+" and this amount will get reflects to your bank account within 24 hours Thank you.");
			manager.remove(flight);
			manager.persist(notification);
			
			return true;
		}else {
			throw new CustomException("Ticket Not Present");
		}
		
	}

	@Override
	@Transactional
	public boolean updateTicket(BookedTicket ticket) {
		BookedTicket ticket2=manager.find(BookedTicket.class, ticket.getTicketId());
		 int seat=Integer.parseInt(ticket.getSeat());
		  Flight flight=manager.find(Flight.class, ticket.getFlightId());
		  BookedTicket bookedTicket=manager.find(BookedTicket.class, ticket.getTicketId());
		  int bookedseat=Integer.parseInt(bookedTicket.getSeat());
		  int flightseat=Integer.parseInt(flight.getSeat());
		  int updatedflightseat=flightseat+bookedseat-seat;
		System.out.println(ticket2);
		if(ticket2!=null) {
			BeanUtils.copyProperties(ticket, ticket2);
			flight.setSeat(Integer.toString(updatedflightseat));
			return true;
		}else {
			throw new CustomException("Ticket not Found");
		}
			
		}

	@Override
	public Customer searchCustomers(int customerId) {
	Customer customer=manager.find(Customer.class, customerId);
	if(customer!=null) {
		return customer;
	}else {
		throw new CustomException("No Customer Found!!!");
	}
	}

	@Override
	public List<CustomerNotification> getCustomerNotification(int customerId) {
		TypedQuery<CustomerNotification> query=manager.createQuery("from CustomerNotification where customerId=:customerId", CustomerNotification.class);
		query.setParameter("customerId", customerId);
		List<CustomerNotification> bean=query.getResultList();
		return bean;
	}

}
