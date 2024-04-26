import React, { useState } from 'react';

// Mock data for initial tickets
const initialTickets = [
  { id: 1, from: 'City A', to: 'City B', date: '2024-04-27', time: '09:00', price: 50 },
  { id: 2, from: 'City B', to: 'City C', date: '2024-04-28', time: '10:00', price: 60 },
];

const RailwayTicketSystem = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [booking, setBooking] = useState({
    id: '',
    from: '',
    to: '',
    date: '',
    time: '',
    price: 0,
  });

  const handleBookTicket = (ticket) => {
    setBooking(ticket);
  };

  return (
    <div>
      <h1>Railway Ticket System</h1>
      <h2>Available Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            {ticket.from} to {ticket.to} - {ticket.date} at {ticket.time} - ${ticket.price}
            <button onClick={() => handleBookTicket(ticket)}>Book</button>
          </li>
        ))}
      </ul>
      {booking.id && (
        <div>
          <h2>Booking Summary</h2>
          <p>You have booked a ticket from {booking.from} to {booking.to}.</p>
          <p>Date: {booking.date}</p>
          <p>Time: {booking.time}</p>
          <p>Price: ${booking.price}</p>
        </div>
      )}
    </div>
  );
};

export default RailwayTicketSystem;
