import Image from "next/image";

export default function DoctorCabinSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Cabin Image */}
          <div>
            <Image
              src="/evadoctorcabin.jpg"   // 🔁 change to your actual path
              // alt="Doctor consultation cabin at Eva Maternity Care"
              alt="Doctor consultation room at Eva Maternity Care"
              width={800}
              height={600}
              className="rounded-2xl object-cover"
              priority={false}
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              {/* Consult with a Female Doctor{" "}<span className="hidden sm:inline" ><br/></span>
               You Can Trust */}
               A Private Space for Meaningful Consultation
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Consultations take place in a quiet, private setting where
              patients are given time to discuss their concerns without
              pressure or interruption.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              This environment allows clear discussion and informed
              decision-making at every stage.
            </p>

            {/* Optional Doctor Presence (small & gentle) */}
            <div className="mt-8 flex items-center gap-4">
              <Image
                src="/drpicclose.png" // 🔁 optional, remove block if not using
                alt="Gynecologist at Eva Maternity Care"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">
                  Dr. Pragati Barot
                </p>
                <p className="text-sm text-gray-600">
                  Gynecologist & Obstetrician
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
