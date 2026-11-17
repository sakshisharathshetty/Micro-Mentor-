"use client";
// OWNER: Saniha — Issue #5 (Navbar and footer)
// Top menu on every page. Shows Login, or the user's name + Logout.

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="text-xl font-bold text-[#2563EB]">
          Micro<span className="text-[#7C3AED]">mentor</span>
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
          <Link href="/" className="hover:text-[#2563EB]">Home</Link>
          <Link href="/mentors" className="hover:text-[#2563EB]">Find Mentors</Link>
          <Link href="/dashboard" className="hover:text-[#2563EB]">My Bookings</Link>

          {user ? (
            <>
              <span className="text-[#6B7280]">Hi, {user.name}</span>
              <button onClick={logout} className="font-medium text-[#DC2626] hover:underline">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="rounded-lg bg-[#2563EB] px-4 py-2 font-medium text-white hover:bg-[#1D4ED8]">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
