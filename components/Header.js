"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Doctor", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Appointment", href: "/appointment" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/evamaternitylogo.png"
              alt="Eva Maternity Care"
              width={180}
              height={50}
              className="w-auto h-8 md:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-700">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="font-bold text-lg hover:text-red-600 transition">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side: CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="hidden sm:block bg-red-600 text-white text-sm px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              WhatsApp
            </a>

            {/* Mobile Menu Button (Hamburger) */}
            <button 
              className="md:hidden p-2 text-gray-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Close Icon (X)
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                // Menu Icon (Hamburger)
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-lg font-medium text-gray-700 hover:text-red-600"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="bg-red-600 text-white text-center py-3 rounded-md mt-2 font-medium"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}


// This is a working hearder below
// "use client";

// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-50 bg-white border-b">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="h-16 flex items-center justify-between">
          
//           {/* Logo */}
//           <Link href="/" className="text-xl font-semibold text-gray-900">
//             <Image
//              src="/evamaternitylogo.png"
//              alt="Eva Maternity Care"
//              width={250}
//              height={150}
//            />
//           </Link>

//           {/* Navigation */}
//           <nav className="hidden flex items-center gap-6 text-md text-gray-700 md:flex">
//             <Link href="/about" className="hover:text-red-900 transition">
//               About
//             </Link>
//             <Link href="/services" className="hover:text-red-600 transition">
//               Services
//             </Link>
//             <Link href="/appointment" className="hover:text-red-600 transition">
//               Appointment
//             </Link>
//             <Link href="/contact" className="hover:text-red-600 transition">
//               Contact
//             </Link>
//           </nav>


//           {/* WhatsApp CTA */}
//           <a
//             href="https://wa.me/91XXXXXXXXXX"
//             target="_blank"
//             className="bg-red-600 text-white text-sm px-4 py-2 rounded-md hover:bg-red-700 transition"
//           >
//             WhatsApp
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }




// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="bg-white border-b">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/evamaternitylogo.png"
//             alt="Eva Maternity Care"
//             width={40}
//             height={40}
//           />
//           <span className="text-lg font-semibold text-gray-900">
//             {/* Eva Maternity Care */}
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex gap-6 text-sm text-gray-700">
//           <Link href="/about" className="hover:text-red-600">
//             About Doctor
//           </Link>
//           <Link href="/services" className="hover:text-red-600">
//             Services
//           </Link>
//           <Link href="/appointment" className="hover:text-red-600">
//             Appointment
//           </Link>
//           <Link href="/contact" className="hover:text-red-600">
//             Contact
//           </Link>
//         </nav>

//         {/* Right Actions */}
//         <div className="flex items-center gap-3">
//           {/* WhatsApp (always visible) */}
//           <a
//             href="https://wa.me/91XXXXXXXXXX"
//             className="hidden sm:inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700"
//           >
//             WhatsApp
//           </a>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-700 focus:outline-none"
//             onClick={() => setOpen(!open)}
//             aria-label="Open menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       {/* Mobile Menu Panel */}
// {open && (
//   <div className="md:hidden bg-white border-t">
//     <nav className="px-6 py-6 space-y-4 text-gray-700 text-base">

//       <div onClick={() => setOpen(false)}>
//         <Link href="/about" className="block">
//           About Doctor
//         </Link>
//       </div>

//       <div onClick={() => setOpen(false)}>
//         <Link href="/services" className="block">
//           Services
//         </Link>
//       </div>

//       <div onClick={() => setOpen(false)}>
//         <Link href="/appointment" className="block">
//           Appointment
//         </Link>
//       </div>

//       <div onClick={() => setOpen(false)}>
//         <Link href="/contact" className="block">
//           Contact
//         </Link>
//       </div>

//       <a
//         href="https://wa.me/91XXXXXXXXXX"
//         className="block mt-4 bg-red-600 text-white text-center py-3 rounded-md"
//         onClick={() => setOpen(false)}
//       >
//         Contact on WhatsApp
//       </a>

//     </nav>
//   </div>
// )}

//     </header>
//   );
// }




// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   return (
//     <header className="border-b bg-white">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
//         {/* Logo + Name */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/evamaternitylogo.png"
//             alt="Eva Maternity Care"
//             width={40}
//             height={40}
//           />
//           <span className="text-lg font-semibold text-gray-900">
//             Eva Maternity Care
//           </span>
//         </Link>

//         {/* Navigation */}
//         <nav className="hidden md:flex gap-6 text-sm text-gray-700">
//           <Link href="/about" className="hover:text-red-600">
//             About Doctor
//           </Link>
//           <Link href="/services" className="hover:text-red-600">
//             Services
//           </Link>
//           <Link href="/appointment" className="hover:text-red-600">
//             Appointment
//           </Link>
//           <Link href="/contact" className="hover:text-red-600">
//             Contact
//           </Link>
//         </nav>

//         {/* WhatsApp CTA */}
//         <a
//           href="https://wa.me/91XXXXXXXXXX"
//           className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700"
//         >
//           WhatsApp
//         </a>
//       </div>
//     </header>
//   );
// }
