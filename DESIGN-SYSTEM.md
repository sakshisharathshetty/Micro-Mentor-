# Micromentor – Design System

This file explains the basic look of Micromentor: the colors, fonts and reusable components we use. Following it keeps every page looking the same.

---

## 1. Colors

| Name       | Hex Code  | Where we use it                                  |
|------------|-----------|--------------------------------------------------|
| Primary    | `#2563EB` | Main buttons, links, navbar logo, active filters |
| Secondary  | `#7C3AED` | Subject tags, highlights, "Book Now" hover       |
| Background | `#F8FAFC` | Page background                                  |
| Surface    | `#FFFFFF` | Cards, modals, input boxes                       |
| Text       | `#111827` | Headings and main text                           |
| Muted Text | `#6B7280` | Small text, descriptions, placeholders           |
| Accent     | `#F59E0B` | Star ratings, "Popular" badge                    |
| Success    | `#16A34A` | Available slot, "Booking confirmed" message      |
| Error      | `#DC2626` | Booked/unavailable slot, form errors             |
| Border     | `#E5E7EB` | Card borders, input borders, dividers            |

**Why these colors?**
Blue feels trustworthy, which matters for a learning platform. Purple gives a friendly, modern feel. Green and red make it easy to tell available and booked slots apart, just like movie seat booking.

---

## 2. Typography

**Font:** Inter (from Google Fonts, loaded through `next/font/google`)

| Style       | Size | Weight         | Used for                          |
|-------------|------|----------------|-----------------------------------|
| H1          | 32px | Bold (700)     | Page titles ("Find a Mentor")     |
| H2          | 24px | Semi Bold (600)| Section titles ("Featured Mentors")|
| H3          | 20px | Semi Bold (600)| Mentor name on cards              |
| Body        | 16px | Regular (400)  | Normal text, bios                 |
| Small       | 14px | Regular (400)  | Prices, ratings, helper text      |
| Button Text | 16px | Medium (500)   | All buttons                       |

**Why Inter?**
It's clean, easy to read on screens and free to use.

---

## 3. Spacing & Shape

- **Spacing:** we use multiples of 4px (4, 8, 12, 16, 24, 32).
- **Border radius:** 8px for buttons and inputs, 12px for cards and modals.
- **Shadow:** a light shadow on cards (`shadow-sm` in Tailwind), and a bigger one on hover (`shadow-md`).

---

## 4. UI Components

These are the reusable components we build once and use on many pages.

| Component    | What it does                                                   | Used on                     |
|--------------|----------------------------------------------------------------|-----------------------------|
| Navbar       | Logo, links (Home, Mentors, My Bookings), Login button         | All pages                   |
| Footer       | Simple copyright and links                                     | All pages                   |
| Button       | Has 3 types: Primary (blue), Secondary (outline), Danger (red) | Everywhere                  |
| Input        | Text box with a label and an error message                     | Login, Register, Search     |
| MentorCard   | Photo, name, field, rating, price, "View Profile" button       | Home, Browse Mentors        |
| Badge        | Small coloured tag for subjects (e.g. "DSA", "Accounting")     | Mentor card, Profile        |
| Dropdown     | Select box for filters (field, subject, price)                 | Browse Mentors              |
| SlotGrid     | Grid of time slots: green = free, red = booked, blue = picked  | Booking page                |
| Modal        | Pop-up box for "Confirm your booking"                          | Booking page                |
| BookingCard  | Shows one booked session with mentor, date, time, Cancel       | My Bookings                 |
| EmptyState   | Message shown when there's nothing to show ("No bookings yet") | My Bookings, Search results |
| Loading      | Simple spinner while data loads                                | Browse Mentors, Profile     |

---

## 5. Button Styles

| Type      | Background | Text color | Example use     |
|-----------|------------|------------|-----------------|
| Primary   | `#2563EB`  | White      | "Book Now"      |
| Secondary | White      | `#2563EB`  | "View Profile"  |
| Danger    | `#DC2626`  | White      | "Cancel Booking"|

Every button gets a darker shade on hover and looks faded when disabled.

---

## 6. Slot Colors (Booking Page)

| Slot State | Color                | Meaning                  |
|------------|----------------------|--------------------------|
| Available  | Green border `#16A34A` | You can book it        |
| Selected   | Blue fill `#2563EB`  | You picked this slot     |
| Booked     | Grey/red `#DC2626`   | Already taken, can't click |

---

## 7. Responsive Design

- **Mobile (below 640px):** 1 mentor card per row, and the navbar turns into a menu button.
- **Tablet (640px–1024px):** 2 cards per row.
- **Desktop (above 1024px):** 3 cards per row.

---

## 8. Design Rules We Follow

1. Use only the colors listed above.
2. Use the Button component everywhere instead of making new buttons.
3. Keep enough white space so pages don't feel crowded.
4. Every image needs `alt` text.
5. Text must be easy to read on its background.
