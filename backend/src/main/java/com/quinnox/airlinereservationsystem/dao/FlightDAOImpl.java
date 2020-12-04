package com.quinnox.airlinereservationsystem.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.airlinereservationsystem.dto.Authentication;
import com.quinnox.airlinereservationsystem.dto.Flight;
import com.quinnox.airlinereservationsystem.dto.Notification;
import com.quinnox.airlinereservationsystem.exception.CustomException;

@Repository
public class FlightDAOImpl implements FlightDAO {

	@Autowired
	public EntityManager manager;
	
	@Override
	@Transactional
	public boolean addFlight(Flight flight) {
		manager.persist(flight);
		return true;
	}

	@Override
	public List<Flight> getAllFlight() {
	TypedQuery<Flight>	flight=manager.createQuery("from Flight",Flight.class);
		return flight.getResultList();
	}

	@Override
	@Transactional
	public boolean updateFLight(Flight flight) {
	Flight flight2=manager.find(Flight.class, flight.getFlightId());
	Notification notification=new Notification();
	if(flight2!=null) {
		notification.setNotificaton("Flight with flightId: "+flight.getFlightId()+", travelling from "+flight.getSourceCity()+" to "+flight.getDestinationCity()+" departure on "+flight.getDeparturedate()+" has been rescheduled so please go to flight schedule section and update yourself Thank you");
		BeanUtils.copyProperties(flight, flight2);
		manager.persist(notification);
		
		return true;
	}else {
		throw new CustomException("FLight not Present");
	}
		
	}

	@Override
	@Transactional
	public boolean deleteFlight(int flightId) {
		Flight flight=manager.find(Flight.class, flightId);
		Notification notification=new Notification();
		if(flight!=null) {
			
			notification.setNotificaton("Fligh with flight Id: "+flight.getFlightId()+", travelling from :"+flight.getSourceCity() +" to :"+flight.getDestinationCity()+" which will departs on "+flight.getDeparturedate()+" has been cancelled due to bad Weather Your Booked Ticket Money  will be return and it will get reflects back to your bank account within seven working days Thank You");
			manager.remove(flight);
			manager.persist(notification);
			
			return true;
		}else {
			throw new CustomException("Flight Not Present");
		}

	}

	@Override
	public Flight seacrhFlight(String sourceCity, String destinationCity) {
		TypedQuery<Flight> query=manager.createQuery("from Flight where sourceCity=:sourceCity and destinationCity=:destinationCity ", Flight.class);
			query.setParameter("sourceCity", sourceCity);
			query.setParameter("destinationCity", destinationCity);
			Flight bean=query.getSingleResult();
			if(bean!=null) {
				return bean;
			}else {
				throw new CustomException("Flight Not Found");
			}

	}

}
