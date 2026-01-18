export const dynamic = "force-static";

export const metadata = {
  title: "Contact Eva Maternity Care | Bharuch",
  description:
    "Find clinic location, consultation hours, and contact details for Eva Maternity Care in Bharuch, Gujarat.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      
      {/* -----------------------------------------------------------------
          HEADER SECTION
      ------------------------------------------------------------------ */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We are here to help. You may visit the clinic directly, contact us for appointments, 
            or reach out via WhatsApp for general inquiries.
          </p>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          CONTACT INFO CARDS
      ------------------------------------------------------------------ */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Card 1: Address */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">Visit Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              1st Floor, R.K Square,<br />
              Opp. Pandit Omkarnath Townhall,<br />
              Shaktinath, Railway Colony,<br />
              Bharuch, Gujarat 392001
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Eva+Maternity+Care+Shaktinath+Bharuch"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-red-600 font-medium hover:underline flex items-center gap-1"
            >
              Get Directions <span>→</span>
            </a>
          </div>

          {/* Card 2: Contact */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">Contact Info</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Call us for appointments or queries.<br/>
              WhatsApp available for quick chat.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <a 
                href="tel:+919023168189" 
                className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
              >
                +91 90231 68189
              </a>
              <a 
                href="https://wa.me/919023168189"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Card 3: Timings */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">Clinic Hours</h2>
            <div className="w-full space-y-3 text-sm">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-500">Mon – Fri</span>
                <div className="text-right text-gray-900 font-medium">
                  <p>10:00 AM – 1:00 PM</p>
                  <p>4:00 PM – 8:30 PM</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-500">Saturday</span>
                <span className="text-gray-900 font-medium">10:00 AM – 3:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Sunday</span>
                <span className="text-red-600 font-medium">Closed</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* -----------------------------------------------------------------
          MAP SECTION (Corrected Navigation Link)
      ------------------------------------------------------------------ */}
      <section className="w-full h-125 md:h-150 bg-gray-100 relative group overflow-hidden">
        
        {/* The Google Map (Visual Context) */}
        <iframe
          // This view shows the area around R.K Square/Townhall for context
          src="https://maps.google.com/maps?q=Pandit+Omkarnath+Townhall,+Shaktinath,+Bharuch,+Gujarat&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.1) contrast(1.1)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Eva Maternity Care Location"
          className="grayscale group-hover:grayscale-0 transition-all duration-700"
          ></iframe>

        {/* 📍 CUSTOM LEGEND CARD (Floating) */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/50 max-w-xs w-[90%] md:w-80 z-20">
          
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">
            Location Key
          </h3>
          
          {/* 1. DESTINATION ICON (Unique Red Medical Pin) */}
          <div className="flex items-start gap-4 relative">
            {/* The Icon */}
            <div className="relative z-10 shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-600 border border-red-100 shadow-sm">
              <span className="absolute inset-0 rounded-full bg-red-600 opacity-10 animate-ping"></span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM10 17V13H6V11H10V7H12V11H16V13H12V17H10Z" /></svg>
            </div>
            
            {/* The Text */}
            <div>
              <p className="text-[10px] text-red-600 font-bold tracking-wider mb-0.5">YOU ARE GOING HERE</p>
              <p className="text-gray-900 font-bold text-base leading-none">Eva Maternity Care</p>
              <p className="text-xs text-gray-500 mt-1">1st Floor, R.K Square</p>
            </div>
          </div>

          {/* CONNECTOR LINE */}
          <div className="ml-5 h-8 border-l-2 border-dashed border-gray-300 my-1"></div>

          {/* 2. LANDMARK ICON (Unique Blue Building Pin) */}
          <div className="flex items-start gap-4">
             {/* The Icon */}
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 border border-slate-200 shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7V21H22V7L12 2ZM5 19H7V11H5V19ZM9 19H11V11H9V19ZM13 19H15V11H13V19ZM17 19H19V11H17V19ZM12 4.15L19.7 8H4.3L12 4.15Z"/></svg>
            </div>

            {/* The Text */}
            <div>
              <p className="text-[10px] text-slate-500 font-bold tracking-wider mb-0.5">LOOK FOR THIS LANDMARK</p>
              <p className="text-gray-700 font-semibold text-sm leading-tight">Pandit Omkarnath Townhall</p>
              <p className="text-xs text-slate-400 mt-0.5 italic">Directly Opposite</p>
            </div>
          </div>
        </div>

        {/* Mobile Button (UPDATED LINK) */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden z-10">
          <a
            // UPDATED: This link now points directly to "Eva Maternity Home"
            href="https://maps.google.com/?cid=13076585602866323900&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-xl font-medium text-sm hover:scale-105 transition-transform"
          >
            <span>Navigate Now</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
          </a>
        </div>

      </section>

    </main>
  );
}



