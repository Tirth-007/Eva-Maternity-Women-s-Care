import Image from "next/image";
import Link from "next/link"; // Added Link import for the CTA buttons

export const metadata = {
  title: "About Dr. Pragati Barot | Eva Maternity Care Bharuch",
  description:
    "Learn about Dr. Pragati Barot, a female gynecologist in Bharuch focused on thoughtful evaluation, clear discussion, and structured medical practice.",
};

export default function AboutDoctorPage() {
  return (
    <main className="bg-white">
      
      {/* -----------------------------------------------------------------
          HERO SECTION: Doctor Bio & Photo
      ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Doctor Photo with "Offset Border" Design */}
          <div className="md:col-span-5 relative group">
            {/* Decorative Offset Background */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-red-100 rounded-2xl -z-10 transition-transform duration-300 group-hover:top-3 group-hover:left-3"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 aspect-4/5">
              <Image
                src="/evadoctor.png" 
                alt="Dr. Pragati Barot - Gynecologist at Eva Maternity Care"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="md:col-span-7">
            <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-wide uppercase mb-4">
              Meet the Doctor
            </span>
            
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 leading-tight mb-2">
              Dr. Pragati Barot
            </h1>
            
            <p className="text-lg text-gray-500 font-medium mb-8">
              Gynecologist & Obstetrician
            </p>

            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                Dr. Pragati Barot leads <span className="text-gray-900 font-medium">Eva Maternity Care</span> with a focus on thoughtful evaluation and structured consultations. 
                She believes that healthcare is not just about prescriptions, but about clear understanding.
              </p>
              <p>
                Her consultations are designed to help patients understand their health concerns, 
                available options, and next steps before making medical decisions. This ensures that every 
                treatment plan is tailored to the patient’s unique situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          PHILOSOPHY & APPROACH (Gray Background)
      ------------------------------------------------------------------ */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">
              Her Consultation Approach
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Time & Attention
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Consultations are structured to allow sufficient time for discussion, 
                examination, and detailed explanation of findings. You will never feel rushed.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                Family Involvement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When required, family members are included in discussions so that everyone 
                involved understands the medical plan and proceeds with clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          EXPERIENCE & EXPERTISE LIST
      ------------------------------------------------------------------ */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left: Professional Bio */}
          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-6">
              Professional Experience
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Pragati Barot has several years of clinical experience in gynecology and obstetrics, 
              working closely with patients across routine consultations, pregnancy care, and gynecological procedures.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Her practice focuses on applying medical knowledge through careful evaluation, 
              structured consultation, and clear communication. She holds recognized medical 
              qualifications in gynecology and obstetrics.
            </p>
          </div>

          {/* Right: Checkmark List */}
          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-6">
              Areas of Expertise
            </h2>
            <ul className="space-y-4">
              {[
                "Pregnancy and maternity consultations",
                "Gynecological evaluation and treatment",
                "Infertility consultation and guidance",
                "Laparoscopic gynecological procedures",
                "Preventive checkups and routine follow-ups"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* Custom Checkmark Icon */}
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* -----------------------------------------------------------------
          FINAL CTA
      ------------------------------------------------------------------ */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">
            Ready to schedule your visit?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            You may schedule a consultation online or contact the clinic directly for further information.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/appointment"
              className="bg-red-600 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-red-700 transition shadow-lg hover:shadow-red-900/50"
            >
              Request an Appointment
            </Link>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-gray-600 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 hover:border-gray-500 transition"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}








