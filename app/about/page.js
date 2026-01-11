import Image from "next/image";

export default function AboutDoctorPage() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* TOP SECTION: Doctor Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Doctor Photo */}
          <div>
            <Image
              src="/evadoctor.png" // 🔁 replace with your actual path
              alt="Dr. Pragati Barot, Gynecologist at Eva Maternity Care"
              width={500}
              height={600}
              className="rounded-2xl object-cover"
              priority
            />
          </div>

          {/* Intro Text */}
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
              Dr. Pragati Barot
            </h1>

            <p className="mt-3 text-lg text-gray-600">
              Gynecologist & Obstetrician
            </p>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              At Eva Maternity Care, every patient is treated with patience,
              respect, and understanding. Dr. Pragati Barot believes that
              good medical care begins with listening carefully and explaining
              every step clearly.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Women are encouraged to speak openly about their concerns in a
              safe and private environment, without fear of judgement or
              pressure.
            </p>
          </div>
        </div>

        {/* APPROACH SECTION */}
        <div className="mt-24 max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-900">
            Her Approach to Care
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Dr. Pragati Barot focuses on providing care that is gentle,
            transparent, and respectful. Every consultation is given
            sufficient time so that patients and families can fully understand
            their condition and treatment options.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Family members are included in discussions when needed, ensuring
            clarity and confidence at every stage of care.
          </p>
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="mt-20 max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-900">
            Experience & Expertise
          </h2>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Pregnancy and maternity care</li>
            <li>• Women’s health and gynecological treatment</li>
            <li>• Infertility guidance</li>
            <li>• Laparoscopic procedures</li>
            <li>• Routine checkups and preventive care</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-lg text-gray-700">
            If you would like to consult or have questions,
            you are welcome to reach out at your comfort.
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




