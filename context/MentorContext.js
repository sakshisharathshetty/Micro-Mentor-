"use client";
// OWNER: Sakshi — Issue #15 (Mentor context)
// Stores the list of mentors and the search/filter values,
// so any page can use them with useMentors().

import { createContext, useContext, useState } from "react";
import { mentors } from "@/data/mentors";

// 1. Create the context
const MentorContext = createContext();

// 2. The Provider holds the state and shares it with every page inside it
export function MentorProvider({ children }) {
  const [search, setSearch] = useState("");
  const [field, setField] = useState(""); // "" means all fields
  const [subject, setSubject] = useState(""); // "" means all subjects
  const [maxPrice, setMaxPrice] = useState(500);

  // Keep only the mentors that match all the filters
  const filteredMentors = mentors.filter((m) => {
    const text = search.toLowerCase();
    const matchesSearch =
      m.name.toLowerCase().includes(text) ||
      m.workplace.toLowerCase().includes(text) ||
      m.subjects.join(" ").toLowerCase().includes(text);
    const matchesField = field === "" || m.field === field;
    const matchesSubject = subject === "" || m.subjects.includes(subject);
    const matchesPrice = m.price <= maxPrice;

    return matchesSearch && matchesField && matchesSubject && matchesPrice;
  });

  function clearFilters() {
    setSearch("");
    setField("");
    setSubject("");
    setMaxPrice(500);
  }

  function getMentorById(id) {
    return mentors.find((m) => m.id === Number(id));
  }

  return (
    <MentorContext.Provider
      value={{
        mentors: filteredMentors,
        search,
        setSearch,
        field,
        setField,
        subject,
        setSubject,
        maxPrice,
        setMaxPrice,
        clearFilters,
        getMentorById,
      }}
    >
      {children}
    </MentorContext.Provider>
  );
}

// 3. Any component can now write: const { mentors } = useMentors();
export function useMentors() {
  return useContext(MentorContext);
}
