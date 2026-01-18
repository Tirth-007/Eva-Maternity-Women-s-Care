export const dynamic = "force-static";

import Image from "next/image"; // Optimization: Use Next.js Image
import Link from "next/link";   // Optimization: Use Next.js Link for client-side nav
import DoctorCabinSection from "@/components/DoctorCabinSection";
import ReceptionSection from "@/components/ReceptionSection";
import WaitingRoomSection from "@/components/WaitingRoomSection";
import PatientRoomSection from "@/components/PatientRoomSection";
import FinalCTASection from "@/components/FinalCTASection";

export const metadata = {
  title: "Eva Maternity Care | Gynecology & Pregnancy Care in Bharuch",
  description:
    "Eva Maternity Care provides gynecology, pregnancy, and women’s health consultations in Bharuch with a focus on clarity, privacy, and structured medical guidance.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      
      {/* -----------------------------------------------------------------
          HERO SECTION
          Design: Clean, Centered, with subtle background art.
      ------------------------------------------------------------------ */}
      <section className="relative bg-linear-to-b from-white to-gray-50 overflow-hidden">
        
        {/* Background Art (Optimized positioning) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-75 h-75 sm:w-125 sm:h-125 opacity-[0.06]">
            <Image
              src="/evaartwork.png"
              alt="Background Decoration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 text-xs font-semibold tracking-wide uppercase mb-6">
            Eva Maternity Home
          </span>
           {/* className="hidden md:block" */}
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-gray-900 leading-tight tracking-tight">
            Women’s Health Care,{" "}<span className="hidden sm:inline" ></span> <br />
            <span className="text-gray-500">Delivered with Thoughtfulness</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Gynecology, pregnancy, and fertility consultations focused on 
            clarity, privacy, and calm guidance. A place where you can speak openly.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/appointment"
              className="w-full sm:w-auto bg-red-600 text-white px-8 py-3.5 rounded-full text-sm font-semibold shadow-sm hover:bg-red-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              Request Appointment
            </Link>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              <span>Talk on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          REASSURANCE / MISSION STATEMENT
          Design: Minimalist "Quote" style to build trust.
      ------------------------------------------------------------------ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border-l-4 border-red-200">
            <h3 className="text-gray-900 font-medium text-lg mb-4">
              Why we are different
            </h3>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-serif italic">
              "Many women find it difficult to discuss health concerns openly when conversations feel rushed. 
              Our consultation spaces are designed to encourage clear discussion and thoughtful decision-making."
            </p>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          FACILITY TOUR (Components)
          Design: Consistent spacing between sections.
      ------------------------------------------------------------------ */}
      <div className="flex flex-col space-y-0">
        <DoctorCabinSection />
        <ReceptionSection />
        <WaitingRoomSection />
        <PatientRoomSection />
      </div>

      {/* -----------------------------------------------------------------
          FINAL CTA (Specific Component)
      ------------------------------------------------------------------ */}
      <FinalCTASection />

      {/* -----------------------------------------------------------------
          DOCTOR TRUST / FOOTER PRE-AMBLE
          Design: Simple text focus.
      ------------------------------------------------------------------ */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-serif font-medium text-gray-900 mb-6">
            Clear Conversations. Informed Decisions.
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Medical discussions are handled at a comfortable pace, ensuring you and your family understand every step before moving forward.
          </p>

          <Link
            href="/about"
            className="group inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
          >
            Learn more about the doctor 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}