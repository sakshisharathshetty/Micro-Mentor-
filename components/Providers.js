"use client";
// OWNER: Sakshi — part of Issues #10, #15, #16
// Puts all three contexts around the whole app,
// so every page can use useAuth(), useMentors() and useBookings().

import { AuthProvider } from "@/context/AuthContext";
import { MentorProvider } from "@/context/MentorContext";
import { BookingProvider } from "@/context/BookingContext";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <MentorProvider>
        <BookingProvider>{children}</BookingProvider>
      </MentorProvider>
    </AuthProvider>
  );
}
