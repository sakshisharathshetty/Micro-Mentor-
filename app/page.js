"use client";
// OWNER: Saniha — Issue #17 (Home page)
// TODO: replace this with the real landing page from your wireframe:
//   hero section, "How it works" (3 steps), and 3 featured mentors.
// For now this is a TEST page that proves the contexts and components work.

import { useMentors } from "@/context/MentorContext";
import Button from "@/components/Button";
import Badge from "@/components/Badge";

export default function HomePage() {
  const { mentors } = useMentors();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Micromentor</h1>
      <p className="mt-2 text-[#6B7280]">Setup works ✅ — {mentors.length} mentors loaded from MentorContext.</p>

      <ul className="mt-6 space-y-2">
        {mentors.map((m) => (
          <li key={m.id}>
            {m.name} <Badge text={m.subjects[0]} />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </div>
  );
}
