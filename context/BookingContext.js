"use client";
// OWNER: Sakshi — Issue #16 (Booking context)
// Stores the sessions the student has booked.
// Any page can add or cancel a booking with useBookings().

import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  // Each booking looks like:
  // { id: 1700000000, mentorId: 3, mentorName: "Dr. Meera Bhat", slot: "Mon 10:00", price: 199 }
  const [bookings, setBookings] = useState([]);

  function addBooking(mentorId, mentorName, slot, price) {
    const newBooking = {
      id: Date.now(), // a simple unique number
      mentorId: mentorId,
      mentorName: mentorName,
      slot: slot,
      price: price,
    };
    setBookings([...bookings, newBooking]);
  }

  function cancelBooking(bookingId) {
    setBookings(bookings.filter((b) => b.id !== bookingId));
  }

  return (
    <BookingContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookings() {
  return useContext(BookingContext);
}
