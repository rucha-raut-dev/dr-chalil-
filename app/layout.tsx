import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Joseph M. Chalil | Global Healthcare Executive & Author",
  description: "Official portfolio of Dr. Joseph M. Chalil — physician executive, author and healthcare strategist.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
