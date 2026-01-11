export default function FinalCTASection() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          When You Would Like to Consult
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Appointments and inquiries can be scheduled at your
          convenience.
        </p>

        {/* <p className="mt-4 text-gray-600">
          Every conversation is handled with care, patience, and respect.
        </p> */}

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/appointment"
            className="bg-red-600 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-red-700 transition"
          >
            Request an Appointment
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="border border-gray-300 px-8 py-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition"
          >
            Talk on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
