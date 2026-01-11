import Image from "next/image";

export default function PatientRoomSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Focused on Recovery and Privacy
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Patient rooms are arranged to support rest, hygiene, and
              privacy during treatment or recovery.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Facilities are maintained to ensure families feel assured
              throughout the admission process.
            </p>
          </div>
          
          {/* Image */}
          <div>
            <Image
              src="/evapatientadmitroom.jpg" // 🔁 replace with your actual image path
              alt="Patient room at Eva Maternity Care"
              width={800}
              height={600}
              className="rounded-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
