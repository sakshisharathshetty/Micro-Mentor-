"use client";
// OWNER: Sakshi — Issue #23 (Dashboard page)
// Shows the sessions I've booked, each with a Cancel button.
// Wrapped in <RequireLogin> so only logged-in users see it.

import { useBookings } from "@/context/BookingContext";
import { useAuth } from "@/context/AuthContext";
import RequireLogin from "@/components/RequireLogin";
import EmptyState from "@/components/EmptyState";
import Button from "@/components/Button";

function Dashboard() {
  const { bookings, cancelBooking } = useBookings();
  const { user } = useAuth();

  let total = 0;
  bookings.forEach((b) => {
    total = total + b.price;
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold">My Bookings</h1>
      <p className="mt-1 text-[#6B7280]">{user.name} · {user.college}</p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-[#E5E7EB] bg-white p-4">
          <p className="text-sm text-[#6B7280]">Sessions booked</p>
          <p className="text-2xl font-bold">{bookings.length}</p>
        </div>
        <div className="rounded-xl border border-[#E5E7EB] bg-white p-4">
          <p className="text-sm text-[#6B7280]">Total to pay</p>
          <p className="text-2xl font-bold">₹{total}</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {bookings.length === 0 ? (
          <EmptyState
            title="No bookings yet"
            message="Find a mentor and book your first 30-minute session."
            linkText="Find a Mentor →"
            linkHref="/mentors"
          />
        ) : (
          bookings.map((b) => (
            <div key={b.id} className="flex flex-col justify-between gap-3 rounded-xl border border-[#E5E7EB] bg-white p-4 sm:flex-row sm:items-center">
              <div>
                <p className="font-semibold">{b.mentorName}</p>
                <p className="text-sm text-[#6B7280]">🗓️ {b.slot} · ₹{b.price}</p>
              </div>
              <Button variant="danger" onClick={() => cancelBooking(b.id)}>
                Cancel Booking
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <RequireLogin>
      <Dashboard />
    </RequireLogin>
  );
}
