// OWNER: Saniha — Issue #7 (Mentor card)
// Shows one mentor. Use it like: <MentorCard mentor={m} />

import Link from "next/link";
import Badge from "./Badge";

export default function MentorCard({ mentor }) {
  return (
    <div className="flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm hover:shadow-md">
      {/* Round circle with the first letter of the name */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] text-lg font-semibold text-white">
          {mentor.name.replace("Dr. ", "").replace("Chef ", "")[0]}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{mentor.name}</h3>
          <p className="text-sm text-[#6B7280]">
            {mentor.field} · <span className="font-medium text-[#111827]">{mentor.workplace}</span>
          </p>
        </div>
      </div>

      {/* One Badge for every subject */}
      <div className="mt-4 flex flex-wrap gap-2">
        {mentor.subjects.map((subject) => (
          <Badge key={subject} text={subject} />
        ))}
      </div>

      {/* Rating and price */}
      <div className="mt-4 flex justify-between text-sm">
        <span className="text-[#F59E0B]">★ {mentor.rating}</span>
        <span className="font-semibold">₹{mentor.price} / 30 min</span>
      </div>

      {/* Goes to /mentors/1, /mentors/2 ... */}
      <Link
        href={`/mentors/${mentor.id}`}
        className="mt-4 rounded-lg border border-[#2563EB] py-2 text-center font-medium text-[#2563EB] hover:bg-[#EFF6FF]"
      >
        View Profile
      </Link>
    </div>
  );
}
