package com.quinnox.airlinereservationsystem.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.airlinereservationsystem.dto.Authentication;
import com.quinnox.airlinereservationsystem.dto.BookedTicket;
import com.quinnox.airlinereservationsystem.dto.Customer;
import com.quinnox.airlinereservationsystem.dto.Flight;
import com.quinnox.airlinereservationsystem.dto.Notification;
import com.quinnox.airlinereservationsystem.exception.CustomException;

@Repository
public class AdminDAOImpl implements AdminDAO {

	@Autowired
	private EntityManager manager;
	
	@Autowired
	private CustomerDAO dao;
	
	@Override
	@Transactional
	public boolean addLogin(Authentication authentication) {
		manager.persist(authentication);
		return true;
	}

	@Override
	public List<Authentication> getLogin() {
    TypedQuery<Authentication>  query=manager.createQuery("from Authentication",Authentication.class);
		return query.getResultList();
	}

	@Override
	public Authentication auth(String email, String password) {
		TypedQuery<Authentication> query=manager.createQuery("from Authentication where email=:email and password=:password", Authentication.class);
		query.setParameter("email", email);
		query.setParameter("password", password);
		Authentication bean=query.getSingleResult();
		if(bean!=null) {
			return bean;
		}else {
			throw new CustomException("Login Credential Failed!!");
		}

	}

	@Override
	@Transactional
	public BookedTicket addBookedTicket(BookedTicket bookedTicket) {
		
		Customer customer=manager.find(Customer.class, bookedTicket.getCustomerId());
		Flight	 flight	=manager.find(Flight.class, bookedTicket.getFlightId());
		BookedTicket ticket=new BookedTicket();
		if(customer!=null && flight!=null) {
			int totalSeat=Integer.parseInt(flight.getSeat());
			int bookedSeat=Integer.parseInt(bookedTicket.getSeat());
			int availableseat=totalSeat-bookedSeat;
			
				if(availableseat>0) {
			ticket.setCustomerId(bookedTicket.getCustomerId());
			ticket.setFlightId(bookedTicket.getFlightId());
			ticket.setDateOfBooking(flight.getDeparturedate());
			ticket.setSourceCity(flight.getSourceCity());
			ticket.setDestinationCity(flight.getDestinationCity());
			ticket.setTakeOffTime(flight.getTakeOffTime());
			ticket.setArrivalTime(flight.getArrivalTime());
			ticket.setSeat(bookedTicket.getSeat());
			manager.persist(ticket);
			flight.setSeat(Integer.toString(availableseat));
			
			return ticket;
				}else {
					throw new CustomException("Seat Not Available");
				}
		}else {
			throw new CustomException("Please Enter Valid Flight or customer!!!");
		}
		}

	@Override
	public List<BookedTicket> getTicket() {
		   TypedQuery<BookedTicket>  query=manager.createQuery("from BookedTicket",BookedTicket.class);
			return query.getResultList();
	}

	@Override
	public List<BookedTicket> getTicket(int customerId) {
		TypedQuery<BookedTicket> query=manager.createQuery("from BookedTicket where customerId=:customerId", BookedTicket.class);
		query.setParameter("customerId", customerId);
			List<BookedTicket>	ticket	=query.getResultList();
			if(ticket!=null) {
				return ticket;
			}else {
				throw new CustomException("This customer does not booked any flght!!!");
			}
	}

	@Override
	public List<Notification> getAllNotifications() {
		TypedQuery<Notification> query=manager.createQuery("from Notification",Notification.class);
		return query.getResultList();
	}
	
	

}
