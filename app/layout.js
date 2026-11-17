// Wraps every page: contexts around everything (Sakshi),
// Navbar on top and Footer at the bottom (Saniha — Issue #5).

import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Micromentor – Learn anything in 30 minutes",
  description: "Book quick, cheap sessions with experts from any field.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#F8FAFC] text-[#111827]">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
