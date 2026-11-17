// OWNER: Saniha — Issue #6 (Button and input)
// One reusable button with 3 looks: "primary", "secondary" and "danger".
// Use it like: <Button variant="danger" onClick={...}>Cancel</Button>

export default function Button({ variant = "primary", children, onClick, type = "button", disabled = false }) {
  let colors = "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"; // primary (blue)

  if (variant === "secondary") {
    colors = "bg-white text-[#2563EB] border border-[#2563EB] hover:bg-[#EFF6FF]";
  }
  if (variant === "danger") {
    colors = "bg-[#DC2626] text-white hover:bg-[#B91C1C]";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg px-4 py-2 font-medium disabled:opacity-50 ${colors}`}
    >
      {children}
    </button>
  );
}
