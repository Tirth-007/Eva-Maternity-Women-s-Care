import Image from "next/image";

export default function ReceptionSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              A Well-Organized and Welcoming Setting
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              From arrival to consultation, the clinic is managed in a
              structured and orderly manner to reduce waiting-time stress
              for patients and families.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Cleanliness and organization are maintained throughout the
              facility.
            </p>
          </div>

          {/* Image */}
          <div>
            <Image
              src="/evalobby.jpg" // 🔁 replace with your actual image path
              alt="Reception and lobby at Eva Maternity Care"
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
