export const dynamic = "force-static";
import DoctorCabinSection from "@/components/DoctorCabinSection";
import ReceptionSection from "@/components/ReceptionSection";
import WaitingRoomSection from "@/components/WaitingRoomSection";
import PatientRoomSection from "@/components/PatientRoomSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function HomePage() {
  return (
    <section>
      {/* HERO SECTION */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          {/* Background Art */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src="/evaartwork.png"
              alt=""
              className="w-65
              sm:w-[320px]
              md:w-105
              lg:w-120
              opacity-[0.08]"
              />
          </div>
          <div className="relative max-w-6xl mx-auto px-6 py-28">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Caring for Women’s Health,
                <br className="hidden sm:block" />
            With Understanding and Respect
              </h1>


              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Gynecology, pregnancy and infertility care — explained clearly,
            treated gently, and guided with patience.
              </p>

              <p className="mt-4 text-gray-700">
            You can speak freely. Every concern is listened to without judgement.
              </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="bg-red-600 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-red-700 transition"
              >
              Request Appointment
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="border border-gray-300 px-8 py-3 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition"
              >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* REASSURANCE SECTION */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Many women hesitate to talk about their health problems.
            <br />
            At Eva Maternity Care, you are heard with patience,
            respect, and clarity.
          </p>
        </div>
      </section>

      {/* Doctor Cabin Section */}
      <DoctorCabinSection />

      {/* Reception / Lobby Section */}
      <ReceptionSection />

      {/* Waiting Room Section */}
      <WaitingRoomSection />

      {/* Patient Room Section */}
      <PatientRoomSection />

      {/* Final CTA / Patient Room Section */}
      <FinalCTASection />


      {/* DOCTOR TRUST SECTION */}
      <div className="bg-white border-t">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Care Led by Understanding
          </h2>

          <p className="mt-4 text-gray-700">
            Good treatment begins with listening.
            <br />
            Every patient is given time, explanation, and honest guidance —
            including family discussions when needed.
          </p>

          <a
            href="/about"
            className="inline-block mt-6 text-red-600 hover:underline"
            >
            Learn more about the doctor →
          </a>
        </div>
      </div>
    </section>
  );
}




{/* <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
  Caring for Women’s Health, With Understanding and Respect
  </h1> */}
  {/* SERVICES PREVIEW */}
  {/* <div className="max-w-7xl mx-auto px-4 py-16">
    <h2 className="text-2xl font-semibold text-center text-gray-900">
    Our Care Services
    </h2>
    
    <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {[
      "Women’s Health & Gynecology",
      "Pregnancy & Maternity Care",
      "Infertility Guidance",
      "Laparoscopic Procedures",
      "Routine Checkups & Prevention",
    ].map((service) => (
      <div
      key={service}
      className="border rounded-lg p-6 text-center"
      >
      <p className="text-gray-800">{service}</p>
      </div>
    ))}
    </div>
    </div> */}
    {/* <p className="mt-4 text-gray-700">
      Good treatment begins with listening.
      <br />
      Every patient is given time, explanation, and honest guidance —
      including family discussions when needed.
      </p> */}
      {/* <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Gynecology, pregnancy and infertility care — explained clearly,
        treated gently, and guided with patience.
      </p>
      
      <p className="mt-3 text-gray-700">
        You can speak freely. Every concern is listened to without judgement.
      </p> */}