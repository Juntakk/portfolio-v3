import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesWrapper from "../components/particles/ParticlesWrapper"; // Import the wrapper component
import ThemeProvider from "@/theme/ThemeProvider";
import ClientLoader from "@/components/shared/ClientLoader";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
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
    <html>
      <body className={`${inter.variable} antialiased`}>
        <ParticlesWrapper />
        <div style={{ position: "relative", zIndex: 0 }}>
          <ThemeProvider>
            <ClientLoader>
              <Toaster position="bottom-right" />
              {children}
            </ClientLoader>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
