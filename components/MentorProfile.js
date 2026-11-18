"use client";
// OWNER: Saniha — Issue #20 (Mentor profile page)
// Full details of one mentor. The booking box at the bottom
// is Sakshi's <BookingSection> component.

import Link from "next/link";
import { useMentors } from "@/context/MentorContext";
import Badge from "@/components/Badge";
import EmptyState from "@/components/EmptyState";
import BookingSection from "@/components/BookingSection";

export default function MentorProfile({ id }) {
  const { getMentorById } = useMentors();
  const mentor = getMentorById(id);

  if (!mentor) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <EmptyState title="Mentor not found" message="This mentor doesn't exist." linkText="Back to mentors" linkHref="/mentors" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/mentors" className="text-sm font-medium text-[#2563EB] hover:underline">
        ← Back to mentors
      </Link>

      <div className="mt-4 rounded-xl border border-[#E5E7EB] bg-white p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2563EB] text-2xl font-bold text-white">
            {mentor.name.replace("Dr. ", "").replace("Chef ", "")[0]}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{mentor.name}</h1>
            <p className="text-[#6B7280]">
              {mentor.field} · <span className="font-medium text-[#111827]">{mentor.workplace}</span>
            </p>
            <p className="mt-1 text-sm">
              <span className="text-[#F59E0B]">★ {mentor.rating}</span> · <span className="font-semibold">₹{mentor.price}</span> per 30-minute session
            </p>
          </div>
        </div>

        <h2 className="mt-6 text-lg font-semibold">About</h2>
        <p className="mt-1 text-[#374151]">{mentor.bio}</p>

        <h2 className="mt-6 text-lg font-semibold">Can help with</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {mentor.subjects.map((s) => (
            <Badge key={s} text={s} />
          ))}
        </div>
      </div>

      {/* Sakshi's booking component */}
      <div className="mt-6">
        <BookingSection mentor={mentor} />
      </div>
    </div>
  );
}
