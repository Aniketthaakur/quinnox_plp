interface BookedTicket{
  ticketId?:number;
  customerId:number;
  dateOfBooking:string;
  sourceCity:string;
  destinationCity:string;
  flightId: string;
  takeOffTime:string;
  arrivalTime:string;
  seat:string
}