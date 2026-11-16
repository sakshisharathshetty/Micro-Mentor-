// OWNER: Sakshi — part of Issues #10, #15, #16 (wraps the app in the contexts)
// Saniha: when you build Navbar and Footer (#5), import them here and
// put <Navbar /> above <main> and <Footer /> below it.

import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Micromentor – Learn anything in 30 minutes",
  description: "Book quick, cheap sessions with experts from any field.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#F8FAFC] text-[#111827]">
        <Providers>
          {/* TODO (Saniha #5): <Navbar /> goes here */}
          <main className="flex-1">{children}</main>
          {/* TODO (Saniha #5): <Footer /> goes here */}
        </Providers>
      </body>
    </html>
  );
}
