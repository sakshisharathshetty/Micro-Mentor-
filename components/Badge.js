// OWNER: Saniha — Issue #8 (Small components)
// Small purple tag for subjects, e.g. <Badge text="DSA" />

export default function Badge({ text }) {
  return (
    <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-medium text-[#7C3AED]">
      {text}
    </span>
  );
}
