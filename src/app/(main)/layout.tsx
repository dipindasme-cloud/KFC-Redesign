import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";
import "../globals.css"; // Note: Updated path to step out one extra folder level
import MainHeader from "@/app/components/MainHeader";
import MainFooter from "@/app/components/MainFooter";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KFC India - Premium Redesign",
  description: "Experience the ultimate, modern redesign of KFC India's ordering platform.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${workSans.variable} antialiased bg-[#f9f9f9] min-h-screen flex flex-col`}>
        {/* Shows on all general menu pages */}
        <MainHeader />

        <div className="pt-16 flex-1 flex flex-col">
          {children}
        </div>

        <MainFooter />
      </body>
    </html>
  );
}