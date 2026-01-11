import Image from "next/image";

export default function WaitingRoomSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
          {/* Image */}
          <div>
            <Image
              src="/evapatientwaitinglounge.jpg" // 🔁 replace with your actual image path
              alt="Comfortable waiting area at Eva Maternity Care"
              width={800}
              height={600}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Designed for Ease While You Wait
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              The waiting area offers a calm seating arrangement so
              patients can remain comfortable while appointments are
              being prepared.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Special attention is given to maintaining a quiet and
              well-managed environment.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}
