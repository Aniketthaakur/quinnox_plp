package com.quinnox.airlinereservationsystem.dao;

import java.util.List;

import com.quinnox.airlinereservationsystem.dto.Authentication;
import com.quinnox.airlinereservationsystem.dto.BookedTicket;
import com.quinnox.airlinereservationsystem.dto.Notification;

public interface AdminDAO {
	
	public boolean addLogin(Authentication authentication);
	
	public List<Authentication> getLogin();
	
	public Authentication auth(String email,String password);
	
	public BookedTicket addBookedTicket(BookedTicket bookedTicket);
	
	public List<BookedTicket> getTicket();
	
	public List<BookedTicket> getTicket(int customerId);
	
	public List<Notification> getAllNotifications();

}
