export default function ContactInfo() {
  return (
    <div className="bg-gradient-to-br from-[#1D3E6D] to-[#0F172A] text-white p-6 rounded-lg shadow-md w-full space-y-6">
      <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
      <p className="text-sm mb-4">We’re all ears! Talk to us about your needs, and we’ll provide the best possible solution.</p>

      <div className="space-y-4 text-sm">
        <div>
          <h3 className="font-semibold">ADDRESS</h3>
          <p>House# 1, Road# 1, Block# A, Chattogram Bangladesh</p>
        </div>
        <div>
          <h3 className="font-semibold">ASSISTANCE 24/7</h3>
          <p>+8801881402678</p>
          <p>contact@hh.com</p>
        </div>
        <div>
          <h3 className="font-semibold">APPOINTMENT</h3>
          <p>+8801881402678</p>
          <p>contact@hh.com</p>
        </div>
        <div>
          <h3 className="font-semibold">BUSINESS HOURS</h3>
          <p>Monday–Saturday: 9.30 am – 6.30 pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <a href="tel:+8801881402678" className="bg-white text-[#1D3E6D] px-4 py-2 rounded font-semibold">Call Now</a>
        <a href="https://wa.me/8801881402678" className="bg-green-500 text-white px-4 py-2 rounded font-semibold">WhatsApp</a>
      </div>
    </div>
  );
}
