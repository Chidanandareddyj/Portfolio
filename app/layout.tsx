import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { Particles } from "@/components/magicui/particles";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Chidananda Reddy",
  description: "Portfolio of Chidananda Reddy, a Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased py-1 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <TooltipProvider delayDuration={0}>
          <div className="absolute inset-0">
            <Particles size={0.6} quantity={100} />
          </div>
          {children}
          <Navbar />
        </TooltipProvider>
      </body>
    </html>
  );
}
