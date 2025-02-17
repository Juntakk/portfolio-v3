import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesWrapper from "../components/particles/ParticlesWrapper"; // Import the wrapper component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicolas Gauthier",
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
        <ParticlesWrapper /> {/* Particles background */}
        <div style={{ position: "relative", zIndex: 0 }}>
          {" "}
          {/* Ensure content is above particles */}
          {children}
        </div>
      </body>
    </html>
  );
}
