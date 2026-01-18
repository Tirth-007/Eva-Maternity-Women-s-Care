import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gynecology & Maternity Services | Eva Maternity Care",
  description:
    "Explore gynecology, pregnancy care, infertility consultation, laparoscopic procedures, and clinical facilities available at Eva Maternity Care in Bharuch.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      
      {/* -----------------------------------------------------------------
          HERO SECTION
      ------------------------------------------------------------------ */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold tracking-wide uppercase mb-4">
            Comprehensive Care
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
            Our Medical Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Eva Maternity Care offers a range of gynecological and maternity services 
            for women at different stages of life, provided through structured consultations 
            and clinical evaluation.
          </p>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          MAIN SERVICES GRID
      ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Card 1: Pregnancy */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {/* Baby/Maternity Icon */}
              <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h2 className="text-2xl font-serif text-gray-900 mb-4">
              Pregnancy & Maternity
            </h2>
            <ul className="space-y-3">
              {[
                "Antenatal consultations and monitoring",
                "Normal and high-risk pregnancy management",
                "Delivery-related consultation and guidance",
                "Postnatal follow-up and recovery"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Gynecology */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {/* Flower/Wellness Icon */}
              <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h2 className="text-2xl font-serif text-gray-900 mb-4">
              Gynecology Services
            </h2>
            <ul className="space-y-3">
              {[
                "Menstrual and hormonal evaluation",
                "Gynecological consultations and treatment",
                "Preventive checkups and routine follow-ups",
                "Management of common gynecological conditions"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Infertility */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {/* Growth/Seed Icon */}
              <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h2 className="text-2xl font-serif text-gray-900 mb-4">
              Infertility Guidance
            </h2>
            <ul className="space-y-3">
              {[
                "Initial infertility evaluation",
                "Discussion of possible causes and options",
                "Step-by-step guidance for further procedures",
                "Personalized counseling"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: Laparoscopy */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {/* Microscope/Tech Icon */}
              <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h2 className="text-2xl font-serif text-gray-900 mb-4">
              Laparoscopic Procedures
            </h2>
            <ul className="space-y-3">
              {[
                "Minimally invasive gynecological procedures",
                "Pre-procedure evaluation and explanation",
                "Post-procedure follow-up and monitoring",
                "Advanced surgical care"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          FACILITIES (Side-by-Side Layout)
      ------------------------------------------------------------------ */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Image Side */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-4/3 group">
              <Image
                src="/evaotroom.jpg" 
                alt="Operation theatre and clinical facilities at Eva Maternity Care"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Text Side */}
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-6">
                Clinical Facilities & Safety
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Eva Maternity Home is equipped to support consultations, procedures, 
                and patient recovery through organized facilities and maintained clinical standards.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                All procedures are carried out following standard safety protocols, 
                with careful attention to patient comfort and recovery. We prioritize hygiene, 
                advanced equipment, and a sterile environment.
              </p>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Specialized Clinical Care</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {[
                    "Cesarean delivery",
                    "Family planning",
                    "Gynecological surgery",
                    "Adolescent health",
                    "Menopause care",
                    "Routine checkups"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                       <span className="text-gray-600 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          FINAL CTA
      ------------------------------------------------------------------ */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
            Have questions about a procedure?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Each service is explained clearly to patients and families, ensuring 
            informed decisions and comfort at every stage of care.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/appointment"
              className="bg-red-600 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-red-700 transition shadow-md"
            >
              Request an Appointment
            </Link>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-8 py-3.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}



