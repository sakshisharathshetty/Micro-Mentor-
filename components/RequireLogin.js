"use client";
// OWNER: Sakshi — Issue #11 (Login protection)
// Wrap a page in <RequireLogin> and anyone not logged in
// is sent to the login page.

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function RequireLogin({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return <p className="p-8 text-center text-[#6B7280]">Redirecting to login…</p>;
  }
  return children;
}
