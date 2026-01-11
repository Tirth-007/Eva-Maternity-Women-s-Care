"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Doctor", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Appointment", href: "/appointment" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    // sticky top-0 z-50 bg-white border-b shadow-sm py-2 md:py-4
    // 
    // changed h-24 to h-20 for a standard sleek look
    <header className="h-20 sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo Section */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/evalogorb.png"
              alt="Eva Maternity Care"
              width={180} // This is now just for aspect ratio calculation
              height={60} // This is now just for aspect ratio calculation
              priority
              // THE RESPONSIVE MAGIC:
              // 1. style={{ width: 'auto' }} -> Unlocks the width so it can grow/shrink
              // 2. h-10 (Mobile) -> h-12 (Tablet) -> h-16 (Laptop) -> h-20 (Big Screen)
              style={{ width: "auto" }} 
              className="object-contain h-10 max-sm:h-32 sm:h-32 md:h-36 lg:h-36"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-base transition-colors duration-200
                  ${
                    isActive
                      ? "text-red-600 font-bold"
                      : "text-gray-700 hover:text-red-600"
                  }
                  `}
                >
                  {link.name}
                  {/* Optional: Animated underline for active state */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side: CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/+919428175116"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-red-700 transition shadow-md"
            >
              WhatsApp
            </a>

            {/* Mobile Menu Button (Hamburger) */}
            <button
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Close Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                // Menu Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Added absolute positioning so it overlays content correctly */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg md:hidden flex flex-col animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => {
              const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
              
              return (
                <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`relative text-base transition-colors duration-200
                  ${
                    isActive
                    ? "text-red-600 font-bold"
                    : "text-gray-700 hover:text-red-600"
                  }
                  `}
                  >
                  {link.name}
                  {/* Optional: Animated underline for active state */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 rounded-full" />
                  )}
                </Link>
              );
            })}
            <a
              href="https://wa.me/+919428175116"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white text-center py-3 rounded-md mt-2 font-medium hover:bg-red-700 transition"
              >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

