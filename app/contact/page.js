export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">

        <h1 className="text-3xl font-semibold text-gray-900 text-center">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-600 text-center">
          We are here to help. You may contact us for appointments,
          consultations, or general inquiries.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 text-gray-700">

          {/* Address & Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Clinic Details
            </h2>

            <p className="mb-2">
              📍 <strong>1st Floor, R.K Squre, opp. Pandit Omkarnath Townhall, Shaktinath, Railway Colony, Bharuch, Gujarat 392001</strong><br />
              Bharuch, Gujarat
            </p>

            <p className="mb-2">
              📞 Phone: +91 XXXXXXXXXX
            </p>

            <p className="mb-2">
              🕒 Clinic Timings:<br />
              Monday – Friday<br />
              10:00 AM – 1:00 PM & 4:00 PM – 8:30 PM<br/>
              Saturday<br/>
              10:00 AM – 3:00 PM<br/>
              Sunday Closed<br/>
              (Makar Sankranti) Hours might differ
            </p>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="inline-block mt-4 border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-100"
            >
              Contact on WhatsApp
            </a>
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Location
            </h2>

            <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-500">
              Google Map will be added here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
