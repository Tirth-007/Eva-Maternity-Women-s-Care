export const dynamic = "force-static";

export default function AppointmentPage() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">

        {/* Page Title */}
        <h1 className="text-3xl font-semibold text-gray-900 text-center">
          Request an Appointment or Consultation
        </h1>

        {/* Intro Text */}
        <p className="mt-4 text-gray-600 text-center">
          If you are unsure or hesitant, that is completely okay.
          <br />
          Share your concern, and our doctor or team will guide you personally.
        </p>

        {/* Form */}
        <form
          action="https://formspree.io/f/mqabopgw"
          method="POST"
          className="mt-10 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Consultation Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Consultation Type
            </label>
            <select
              name="type"
              className="mt-1 w-full border rounded-md px-4 py-2"
            >
              <option>Clinic Visit</option>
              <option>Online Consultation</option>
            </select>
          </div>

          {/* Preferred Day */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Preferred Day
            </label>
            <input
              type="date"
              name="preferred_day"
              className="mt-1 w-full border rounded-md px-4 py-2"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Concern (optional)
            </label>
            <textarea
              name="message"
              rows="4"
              className="mt-1 w-full border rounded-md px-4 py-2"
              placeholder="You may briefly share your concern if you are comfortable."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700"
          >
            Submit Request
          </button>
        </form>

        {/* Reassurance Message */}
        <p className="mt-6 text-sm text-gray-600 text-center">
          After submitting, our doctor or staff will personally contact you
          to understand your concern and confirm the appointment.
        </p>

        {/* WhatsApp Alternative */}
        <div className="mt-10 text-center border-t pt-6">
          <p className="text-gray-700">
            Prefer to talk directly?
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="inline-block mt-3 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100"
          >
            Contact on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
