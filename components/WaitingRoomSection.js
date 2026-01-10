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
              Comfortable Waiting, Without Stress
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              We understand that waiting can feel uncomfortable, especially
              during pregnancy or when you are feeling unwell.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our waiting area is designed to be clean, quiet, and comfortable,
              allowing you and your family to sit peacefully until your
              consultation begins.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}
