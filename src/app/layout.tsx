import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarComponent from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "soham.web",
//   description: "My Portfolio Website",
// };

export const metadata: Metadata = {
  title: "soham.web",
  description: "My Portfolio Website",

  verification: {
    google: "PvHLWXtetK6KohyotWf4YRr5JqOMf4UdsQ7LP3JAXMw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
