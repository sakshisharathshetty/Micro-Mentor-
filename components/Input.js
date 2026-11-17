// OWNER: Saniha — Issue #6 (Button and input)
// A text box with a label above it and an error message below (if any).
// Use it like: <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

export default function Input({ label, type = "text", value, onChange, placeholder, error }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 outline-none focus:border-[#2563EB]"
      />
      {error && <p className="text-sm text-[#DC2626]">{error}</p>}
    </div>
  );
}
