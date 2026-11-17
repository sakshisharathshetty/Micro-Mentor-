"use client";
// OWNER: Sakshi — Issue #24 (Subject filter)
// Browse page: search box and filters on top, mentor cards below.
// All the filter values live in MentorContext.

import { useMentors } from "@/context/MentorContext";
import { FIELDS, SUBJECTS } from "@/data/mentors";
import MentorCard from "@/components/MentorCard";
import EmptyState from "@/components/EmptyState";

export default function MentorsPage() {
  const { mentors, search, setSearch, field, setField, subject, setSubject, maxPrice, setMaxPrice, clearFilters } =
    useMentors();

  const boxStyle = "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 outline-none focus:border-[#2563EB]";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Find a Mentor</h1>
      <p className="mt-1 text-[#6B7280]">Filter by your college subject and book a 30-minute session.</p>

      {/* Filters */}
      <div className="mt-6 grid gap-3 rounded-xl border border-[#E5E7EB] bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
        <input
          type="text"
          placeholder="Search name, company or subject…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={boxStyle}
        />

        <select value={field} onChange={(e) => setField(e.target.value)} className={boxStyle}>
          <option value="">All fields</option>
          {FIELDS.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>

        <select value={subject} onChange={(e) => setSubject(e.target.value)} className={boxStyle}>
          <option value="">All subjects</option>
          {SUBJECTS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <div className="text-sm">
          <p>Max price: ₹{maxPrice}</p>
          <input
            type="range"
            min={100}
            max={500}
            step={50}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-[#2563EB]"
          />
        </div>
      </div>

      <div className="mt-4 flex justify-between text-sm text-[#6B7280]">
        <p>{mentors.length} mentor(s) found</p>
        <button onClick={clearFilters} className="font-medium text-[#2563EB] hover:underline">
          Clear filters
        </button>
      </div>

      {/* Results */}
      {mentors.length === 0 ? (
        <div className="mt-6">
          <EmptyState title="No mentors found" message="Try another subject or raise the max price." />
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m) => (
            <MentorCard key={m.id} mentor={m} />
          ))}
        </div>
      )}
    </div>
  );
}
