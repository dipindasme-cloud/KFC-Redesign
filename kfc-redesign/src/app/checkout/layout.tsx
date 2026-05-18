import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";
import "../globals.css"; // Connects smoothly to your global styles

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
  title: "Secure Checkout | KFC India",
};

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${workSans.variable} antialiased bg-[#f9f9f9] min-h-screen flex flex-col`}>
        
        {/* 
          No MainHeader or MainFooter elements here! 
          This layout acts as a completely clean, isolated structural canvas.
        */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>

      </body>
    </html>
  );
}