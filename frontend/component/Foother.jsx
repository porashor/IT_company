export default function Footer() {
  return (
    <footer className="bg-[#1D3E6D] text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Intro */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">MYIT</h2>
          <p className="text-sm">
            Founded in 2016, IT-company is one of the best Digital Marketing Agencies.
            Services we provide: SEO | SMM | SEM | PPC | Web Design | Public Relations | ORM
          </p>
          <a
            href="https://wa.me/8801881402678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Top Services */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Top Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Digital Marketing</li>
            <li>Search Engine Optimization</li>
            <li>Website Development</li>
            <li>Software Development</li>
            <li>Ecommerce Website Development</li>
            <li>Mobile App Development</li>
            <li>Logo Design</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Portfolio</li>
            <li>Our Clients</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: contact@hhh.com</li>
            <li>Phone: +8801******</li>
            <li>Head Office: House # 123, Road # 12, Bangladesh</li>
            <li className="flex gap-2 mt-2">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </li>
          </ul>
        </div>
      </div>

      {/* Membership + Footer Note */}
      <div className="mt-10 text-center text-sm border-t border-white/30 pt-4">
        <p className="mt-2">Website designed & developed by ~ Parashar das</p>
      </div>
    </footer>
  );
}
