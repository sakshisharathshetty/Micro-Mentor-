"use client";
// OWNER: Saniha — Issue #18 (Login and register pages)
// Fake login: any email + password works (no backend).

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }
    if (login(email, password)) {
      router.push("/mentors");
    } else {
      setError("Please fill in both fields");
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-[#E5E7EB] bg-white p-8">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-sm text-[#6B7280]">Log in to book sessions with mentors.</p>

        <Input label="Email" type="email" placeholder="you@college.edu" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        {error && <p className="text-sm text-[#DC2626]">{error}</p>}

        <Button type="submit">Log in</Button>

        <p className="text-sm text-[#6B7280]">
          New here?{" "}
          <Link href="/register" className="font-medium text-[#2563EB] hover:underline">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
