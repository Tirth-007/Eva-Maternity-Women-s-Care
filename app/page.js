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
            Women’s Health Care,
                <br className="hidden sm:block" />
            Delivered with Thoughtfulness
              </h1>


              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Gynecology, pregnancy and fertility consultations
            focused on clarity, privacy, and calm guidance.
              </p>

              <p className="mt-4 text-gray-700">
            A place where women can speak openly and feel supported.
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
            Many women find it difficult to discuss health concerns openly,
            especially when conversations feel rushed or uncomfortable.
          </p>
          <p className="mt-2 text-gray-700 text-lg leading-relaxed">
           This is why consultation spaces at Eva Maternity Care are designed
           to encourage clear discussion and thoughtful decision-making.
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
            Clear Conversations. Informed Decisions.
          </h2>

          <p className="mt-4 text-gray-700">
            Medical discussions are handled clearly and at a comfortable pace,
            <br />
            so patients and families understand each step before moving forward.
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




