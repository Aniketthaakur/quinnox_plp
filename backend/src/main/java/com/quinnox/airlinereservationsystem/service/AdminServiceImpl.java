package com.quinnox.airlinereservationsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.airlinereservationsystem.dao.AdminDAO;
import com.quinnox.airlinereservationsystem.dto.Authentication;
import com.quinnox.airlinereservationsystem.dto.BookedTicket;
import com.quinnox.airlinereservationsystem.dto.Notification;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminDAO dao;
	
	@Override
	public boolean addLogin(Authentication authentication) {
		return dao.addLogin(authentication);
	}

	@Override
	public List<Authentication> getLogin() {
		return dao.getLogin();
	}

	@Override
	public Authentication auth(String email, String password) {
		return dao.auth(email, password);
	}

	@Override
	public BookedTicket addBookedTicket(BookedTicket bookedTicket) {
		return dao.addBookedTicket(bookedTicket);
	}

	@Override
	public List<BookedTicket> getTicket() {
		return dao.getTicket();
	}

	@Override
	public List<BookedTicket> getTicket(int customerId) {
		return dao.getTicket(customerId);
	}

	@Override
	public List<Notification> getAllNotifications() {
		return dao.getAllNotifications();
	}

}
