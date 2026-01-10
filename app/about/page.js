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




// export const dynamic = "force-static";

// export default function AboutDoctorPage() {
//   return (
//     <section className="bg-white">
//       <div className="max-w-4xl mx-auto px-4 py-16">

//         {/* Page Title */}
//         <h1 className="text-3xl font-semibold text-gray-900 text-center">
//           About the Doctor
//         </h1>

//         {/* Intro */}
//         <p className="mt-6 text-gray-700 text-center">
//           At Eva Maternity Care, treatment begins with listening.
//           <br />
//           Every woman deserves to understand her health with clarity and respect.
//         </p>

//         {/* Doctor Info */}
//         <div className="mt-12 space-y-6 text-gray-700">
//           <p>
//             The doctor at Eva Maternity Care is a qualified Gynecologist and
//             Obstetrician with experience in women’s health, pregnancy care,
//             infertility guidance, and laparoscopic procedures.
//           </p>

//           <p>
//             With several years of clinical experience, the focus has always been
//             on providing ethical, transparent, and patient-centric care.
//           </p>

//           <p>
//             Many women hesitate to speak openly about their health concerns.
//             The approach here is to create a safe space where patients feel
//             comfortable, heard, and supported.
//           </p>

//           <p>
//             Treatment options are explained clearly — not only to the patient,
//             but also to family members when required — so that decisions are
//             taken with confidence and understanding.
//           </p>
//         </div>

//         {/* Philosophy Section */}
//         <div className="mt-12 bg-gray-50 border rounded-lg p-6">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">
//             Approach to Care
//           </h2>

//           <ul className="space-y-3 text-gray-700 list-disc list-inside">
//             <li>Listening patiently before diagnosing</li>
//             <li>Explaining conditions and treatments in simple language</li>
//             <li>Respecting patient privacy and comfort</li>
//             <li>Encouraging questions from patients and families</li>
//             <li>Providing honest medical guidance without pressure</li>
//           </ul>
//         </div>

//         {/* CTA */}
//         <div className="mt-12 text-center">
//           <p className="text-gray-700 mb-4">
//             If you have concerns or questions, you can begin by speaking with us.
//           </p>

//           <a
//             href="/appointment"
//             className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
//           >
//             Request an Appointment
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// }
