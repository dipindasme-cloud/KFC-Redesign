"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname();
  
  const navTabs = [
    { name: "Menu", href: "/menu" },
    { name: "Offers", href: "/offers" }, // Fixed routing bug here!
  ];

  return (
    <nav className="hidden lg:flex items-center gap-6 h-16 ml-6">
      {navTabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 px-2 py-1.5 relative ${
              isActive ? "text-red-600 font-extrabold" : "text-gray-900 hover:text-red-600"
            }`}
          >
            {tab.name}
            {isActive && (
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-red-600 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}