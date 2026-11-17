"use client";
// OWNER: Sakshi — Issue #21 (Slot picker)
// Movie-seat style grid: days across the top, times down the side.
// Green border = free, Blue = the one you picked, Grey ✕ = already taken.

import { DAYS, TIMES } from "@/data/mentors";

export default function SlotGrid({ takenSlots, selectedSlot, onSelect }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="mx-auto border-separate border-spacing-2">
          <thead>
            <tr>
              <th></th>
              {DAYS.map((day) => (
                <th key={day} className="text-sm text-[#6B7280]">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIMES.map((time) => (
              <tr key={time}>
                <td className="pr-2 text-right text-sm text-[#6B7280]">{time}</td>
                {DAYS.map((day) => {
                  const slot = day + " " + time; // e.g. "Mon 10:00"
                  const isTaken = takenSlots.includes(slot);
                  const isSelected = selectedSlot === slot;

                  let style = "border-2 border-[#16A34A] bg-white hover:bg-[#DCFCE7]"; // free
                  if (isTaken) style = "cursor-not-allowed bg-[#E5E7EB] text-[#9CA3AF]";
                  if (isSelected) style = "bg-[#2563EB] text-white";

                  return (
                    <td key={slot}>
                      <button
                        disabled={isTaken}
                        onClick={() => onSelect(slot)}
                        className={`h-10 w-14 rounded-lg text-xs font-medium ${style}`}
                      >
                        {isTaken ? "✕" : time}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex justify-center gap-4 text-xs text-[#6B7280]">
        <span>🟩 Available</span>
        <span>🟦 Selected</span>
        <span>⬜ Booked</span>
      </div>
    </div>
  );
}
