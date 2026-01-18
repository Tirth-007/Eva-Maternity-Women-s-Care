"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function AppointmentPage() {

  const formRef = useRef(null);

  useEffect(() => {
  if (formRef.current) {
    formRef.current.reset();
  }
}, []);

  return (
    // Changed background to gray-50 to make the white form pop
    <main className="bg-gray-50 min-h-screen">

      {/* -----------------------------------------------------------------
          HEADER SECTION
      ------------------------------------------------------------------ */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
            Schedule a Consultation
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Appointments at Eva Maternity Care are scheduled in a simple and flexible manner.
            Choose the method that works best for you.
          </p>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          MAIN CONTENT: Split Layout (Contact vs Form)
      ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* LEFT COLUMN: WhatsApp & Info */}
          <div className="lg:col-span-5 space-y-10">

            {/* WhatsApp Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                {/* WhatsApp Icon */}
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
              </div>
              <h2 className="text-xl font-medium text-gray-900 mb-2">
                Quick Question?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The fastest way to reach us. Message directly for availability or quick guidance.
              </p>
              <a
                href="https://wa.me/919023168189"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition shadow-sm w-full sm:w-auto justify-center"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Reassurance Text */}
            <div className="px-4">
              <h3 className="font-serif text-lg text-gray-900 mb-3">
                Need to speak privately?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We understand that some conversations are sensitive.
                You are welcome to request a call back, and we will contact you
                discreetly at a time that suits you.
              </p>
            </div>
          </div>


          {/* RIGHT COLUMN: The Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">

              <div className="mb-8">
                <h2 className="text-2xl font-serif text-gray-900">
                  Request an Appointment
                </h2>
                <p className="text-gray-500 mt-2">
                  Fill out the form below and our team will contact you to confirm your slot.
                </p>
              </div>

              <form
                ref={formRef}
                suppressHydrationWarning
                action="https://formspree.io/f/xeeeanbe" // ⚠️ Add your Form ID here
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="_redirect"
                  value="http://localhost:3000/thank-you"
                />
                <input type="hidden" name="_replyto" value="" />
                <input type="hidden" name="source" value="Appointment Page - Eva Maternity Care" />
                <input type="hidden" name="_subject" value="Eva Maternity Care – New Appointment Request" />
                <input type="text" name="_gotcha" className="hidden" />
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Patient Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Enter full name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone & Type Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      pattern="[0-9]{10}"
                      placeholder="+91 90000 00000 10-digit mobile number"
                      title="Please enter a valid 10-digit mobile number"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email (optional)"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
                    <div className="relative">
                      <select
                        name="consultation_type"
                        id="type"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all appearance-none"
                      >
                        <option>Pregnancy Consultation</option>
                        <option>Gynecology Consultation</option>
                        <option>General Checkup</option>
                        <option>Other</option>
                      </select>
                      {/* Custom Arrow Icon */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Details (Optional)</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Any specific concerns or preferred timings?"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-semibold py-4 rounded-lg hover:bg-red-700 active:transform active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
                >
                  Send Request
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-400 text-center mt-4">
                  By submitting this form, you agree to be contacted by Eva Maternity Care.
                  <br className="hidden sm:block" /> Your information is kept strictly confidential.
                </p>
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
