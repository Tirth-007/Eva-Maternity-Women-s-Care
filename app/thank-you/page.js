export const metadata = {
  title: "Thank You | Eva Maternity Home",
  description:
    "Your appointment request has been received. Our team will contact you shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="bg-gray-50 min-h-screen flex items-center justify-center px-6">
      <div className="bg-white max-w-xl w-full rounded-2xl shadow-lg p-10 text-center border border-gray-100">
        
        <h1 className="text-3xl font-serif text-gray-900 mb-4">
          Thank You
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          Your appointment request has been received.
          Our team will contact you shortly to confirm the details.
        </p>

        <p className="text-gray-500 text-sm mb-10">
          If your matter is urgent, you may contact us directly on WhatsApp.
        </p>

        <a
          href="https://wa.me/919023168189"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition"
        >
          Contact on WhatsApp
        </a>
      </div>
    </main>
  );
}
