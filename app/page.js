"use client";
// OWNER: Saniha — Issue #17 (Home page)
// Landing page: hero, "How it works" and 3 featured mentors.

import Link from "next/link";
import { mentors } from "@/data/mentors";
import MentorCard from "@/components/MentorCard";

export default function HomePage() {
  // The 3 mentors with the highest rating
  const featured = [...mentors].sort((a, b) => b.rating - a.rating).slice(0, 3);

  const steps = [
    { icon: "🔎", title: "Find a mentor", text: "Search by field or by your college subject." },
    { icon: "🗓️", title: "Pick a slot", text: "Choose a free 30-minute slot, like booking a movie seat." },
    { icon: "💡", title: "Clear your doubt", text: "Get your question answered by someone who knows it well." },
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Didn&apos;t understand it in class?</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Book a quick, cheap 30-minute session with lecturers and professionals from companies like
            Google and Microsoft, for any subject.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/mentors" className="rounded-lg bg-white px-6 py-3 font-semibold text-[#2563EB]">
              Find a Mentor
            </Link>
            <Link href="/register" className="rounded-lg border border-white px-6 py-3 font-semibold text-white">
              Sign up free
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-semibold">How it works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-xl border border-[#E5E7EB] bg-white p-6 text-center">
              <p className="text-4xl">{step.icon}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-[#6B7280]">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured mentors */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Mentors</h2>
          <Link href="/mentors" className="font-medium text-[#2563EB] hover:underline">
            See all →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((m) => (
            <MentorCard key={m.id} mentor={m} />
          ))}
        </div>
      </section>
    </div>
  );
}
