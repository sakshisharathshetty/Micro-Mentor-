// OWNER: Saniha — Issue #20 (Mentor profile page)
// The [id] in the folder name makes this ONE page work for
// /mentors/1, /mentors/2, /mentors/3 ... It reads the id from the URL.

import { mentors } from "@/data/mentors";
import MentorProfile from "@/components/MentorProfile";

// Tells Next.js which mentor ids exist
export function generateStaticParams() {
  return mentors.map((m) => ({ id: String(m.id) }));
}

export default async function MentorPage({ params }) {
  const { id } = await params;
  return <MentorProfile id={Number(id)} />;
}
