import Image from "next/image";

export default function ServicesPage() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* INTRO */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-semibold text-gray-900">
            Our Medical Services
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Eva Maternity Care provides comprehensive gynecology and maternity
            services with a focus on safety, clarity, and respectful care.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Every treatment is discussed openly, allowing patients and families
            to understand their options before making decisions.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Pregnancy & Maternity Care
            </h2>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Antenatal and postnatal care</li>
              <li>• Normal and high-risk pregnancy monitoring</li>
              <li>• Delivery guidance and care</li>
              <li>• Post-delivery recovery support</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Gynecology Services
            </h2>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Menstrual and hormonal concerns</li>
              <li>• Women’s health checkups</li>
              <li>• PCOS and related conditions</li>
              <li>• Preventive gynecological care</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Infertility Guidance
            </h2>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Initial infertility consultation</li>
              <li>• Evaluation and guidance</li>
              <li>• Clear explanation of treatment options</li>
              <li>• Supportive, step-by-step approach</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Laparoscopic Procedures
            </h2>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Minimally invasive gynecological procedures</li>
              <li>• Reduced recovery time</li>
              <li>• Performed with safety and precision</li>
              <li>• Clear pre- and post-procedure guidance</li>
            </ul>
          </div>

        </div>

        {/* OT & FACILITIES */}
        <div className="mt-24 max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-900">
            Facilities & Safety
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Eva Maternity Care is equipped with a clean and well-maintained
            operation theatre and patient facilities, ensuring safety and
            hygiene during medical procedures.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            All procedures are carried out following standard safety protocols,
            with careful attention to patient comfort and recovery.
          </p>

          {/* OPTIONAL IMAGE (ONE ONLY) */}
          <div className="mt-10">
            <Image
              src="/evaotroom.jpg" // 🔁 optional OT image
              alt="Operation theatre at Eva Maternity Care"
              width={900}
              height={600}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="mt-20 max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900">
              Specialized Care & Facilities
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Eva Maternity Care provides a wide range of specialized services to
              support women through different stages of life, from planning a
              pregnancy to menopause and beyond.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Preconceptional counseling and pregnancy planning</li>
              <li>• Antenatal check-ups and high-risk pregnancy care</li>
              <li>• Normal and cesarean deliveries</li>
              <li>• Family planning guidance</li>
              <li>• Infertility evaluation and treatment</li>
              <li>• Laparoscopic gynecological procedures</li>
              <li>• Treatment for gynecological conditions, including hysterectomy</li>
              <li>• Care for adolescent, reproductive, and menopausal health concerns</li>
            </ul>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Each service is explained clearly to patients and families, ensuring
              informed decisions and comfort at every stage of care.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-28 text-center">
          <p className="text-lg text-gray-700">
            If you would like to understand any service in more detail,
            you are welcome to consult with us.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
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

      </div>
    </section>
  );
}





