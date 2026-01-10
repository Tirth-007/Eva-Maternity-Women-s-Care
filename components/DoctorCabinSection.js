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
              alt="Doctor consultation cabin at Eva Maternity Care"
              width={800}
              height={600}
              className="rounded-2xl object-cover"
              priority={false}
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Consult with a Female Doctor{" "}<span className="hidden sm:inline" ><br/></span>
               You Can Trust
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Every consultation takes place in a calm and private environment,
              where your concerns are listened to patiently and explained
              clearly — without judgement or pressure.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              This space is designed so that women feel comfortable speaking
              openly about their health, at their own pace.
            </p>

            {/* Optional Doctor Presence (small & gentle) */}
            <div className="mt-8 flex items-center gap-4">
              <Image
                src="/evadoctorclosepic.png" // 🔁 optional, remove block if not using
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
