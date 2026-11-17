"use client";
// OWNER: Saniha — Issue #18 (Login and register pages)
// Sign-up form (fake, no backend).

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || email === "" || college === "" || password === "") {
      setError("Please fill in all the fields");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    register(name, email, college);
    router.push("/mentors");
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-[#E5E7EB] bg-white p-8">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-sm text-[#6B7280]">Start learning from experts in minutes.</p>

        <Input label="Full name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="College" placeholder="Sahyadri College" value={college} onChange={(e) => setCollege(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        {error && <p className="text-sm text-[#DC2626]">{error}</p>}

        <Button type="submit">Sign up</Button>

        <p className="text-sm text-[#6B7280]">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-[#2563EB] hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
