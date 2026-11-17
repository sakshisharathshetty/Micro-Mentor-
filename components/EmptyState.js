// OWNER: Saniha — Issue #8 (Small components)
// The "nothing found" box, e.g. no search results or no bookings yet.

import Link from "next/link";

export default function EmptyState({ title, message, linkText, linkHref }) {
  return (
    <div className="rounded-xl border border-dashed border-[#E5E7EB] bg-white p-10 text-center">
      <p className="text-4xl">🔍</p>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-[#6B7280]">{message}</p>
      {linkText && (
        <Link href={linkHref} className="mt-4 inline-block font-medium text-[#2563EB] hover:underline">
          {linkText}
        </Link>
      )}
    </div>
  );
}
