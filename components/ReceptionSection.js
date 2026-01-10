import Image from "next/image";

export default function ReceptionSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              A Calm and Respectful Environment
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              From the moment you enter Eva Maternity Care, you are welcomed into
              a clean, organized, and peaceful environment designed to make
              women and families feel comfortable and at ease.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our reception and waiting areas are managed with care so that your
              experience begins calmly, without confusion or unnecessary stress.
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
