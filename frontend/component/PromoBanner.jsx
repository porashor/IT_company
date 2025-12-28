export default function PromoBanner() {
  return (
    <section data-aos="slide-up" className="w-full bg-gradient-to-r from-[#1D3E6D] to-yellow-400 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Side */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Start your transformation today!</h2>
          <p className="text-sm md:text-base text-white/90">
            Are you ready to revolutionize the way you do business? Webworksbd is your catalyst for success,
            combining innovation, seamless integration, and tailored solutions.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-white hover:text-blue-200 text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-pink-300 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-red-500 text-xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end">
          <a
            href="https://wa.me/8801631392430"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1D3E6D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
