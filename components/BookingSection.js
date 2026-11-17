"use client";
// OWNER: Sakshi — Issue #22 (Booking confirmation)
// The "Book a session" box on a mentor's profile:
// pick a slot -> confirm in a popup -> booking saved in BookingContext.

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBookings } from "@/context/BookingContext";
import { useAuth } from "@/context/AuthContext";
import SlotGrid from "./SlotGrid";
import Button from "./Button";
import Modal from "./Modal";

export default function BookingSection({ mentor }) {
  const { bookings, addBooking } = useBookings();
  const { user } = useAuth();
  const router = useRouter();

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [success, setSuccess] = useState(false);

  // Slots I can't pick = taken by others (dummy data) + ones I already booked
  const myBookedSlots = bookings.filter((b) => b.mentorId === mentor.id).map((b) => b.slot);
  const takenSlots = [...mentor.bookedSlots, ...myBookedSlots];

  function handleBookClick() {
    if (!user) {
      router.push("/login"); // must log in before booking
      return;
    }
    setShowPopup(true);
  }

  function confirmBooking() {
    addBooking(mentor.id, mentor.name, selectedSlot, mentor.price);
    setShowPopup(false);
    setSelectedSlot(null);
    setSuccess(true);
  }

  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-6">
      <h2 className="text-2xl font-semibold">Book a 30-minute session</h2>
      <p className="mb-4 text-sm text-[#6B7280]">Pick a free slot this week.</p>

      {success && (
        <div className="mb-4 rounded-lg bg-[#DCFCE7] p-3 text-sm text-[#16A34A]">
          ✅ Booking confirmed! See it in{" "}
          <Link href="/dashboard" className="font-semibold underline">My Bookings</Link>.
        </div>
      )}

      <SlotGrid
        takenSlots={takenSlots}
        selectedSlot={selectedSlot}
        onSelect={(slot) => {
          setSelectedSlot(slot);
          setSuccess(false);
        }}
      />

      <div className="mt-6 flex items-center justify-between gap-3">
        <p className="text-sm text-[#6B7280]">
          {selectedSlot ? "Selected: " + selectedSlot : "No slot selected"}
        </p>
        <Button disabled={!selectedSlot} onClick={handleBookClick}>
          Book Now · ₹{mentor.price}
        </Button>
      </div>

      <Modal open={showPopup} title="Confirm your booking" onClose={() => setShowPopup(false)}>
        <p><span className="text-[#6B7280]">Mentor:</span> {mentor.name}</p>
        <p><span className="text-[#6B7280]">Slot:</span> {selectedSlot}</p>
        <p><span className="text-[#6B7280]">Price:</span> ₹{mentor.price}</p>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" onClick={() => setShowPopup(false)}>Cancel</Button>
          <Button onClick={confirmBooking}>Confirm</Button>
        </div>
      </Modal>
    </div>
  );
}
