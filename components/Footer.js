export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
          
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Eva Maternity Care
            </h3>
            <p className="leading-relaxed">
              Women’s health, pregnancy and gynecology care with
              understanding, respect, and personal attention.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Contact
            </h3>
            <p>Bharuch, Gujarat</p>
            <p>+91 9023168189</p>
            <p className="mt-2">
              Mon – Fri<br />
              10:00 AM – 1:00 PM<br />
              4:00 PM – 8:30 PM<br/>
              Saturday<br/>
              10:00 AM – 3:00 PM<br/>
              Sunday<br/> Closed
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Our Approach
            </h3>
            <p className="leading-relaxed">
              We believe in listening first, explaining clearly,
              and guiding patients and families with honesty.
            </p>
          </div>

        </div>

        <div className="mt-10 text-center text-xs text-gray-500">
          © 2026 Eva Maternity Care. All rights reserved.
        </div>
        <p className="text-center text-xs text-gray-500">
          Built with purpose by Tirth Barot.
        </p>

      </div>
    </footer>
  );
}