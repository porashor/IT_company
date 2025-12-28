export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, FinTech Startup",
      feedback:
        "Working with [Company Name] has been a game-changer. Their secure and scalable solutions helped us grow confidently.",
    },
    {
      name: "David Lee",
      role: "CTO, E-Commerce Brand",
      feedback:
        "The team feels less like a vendor and more like a partner. Their quick support and tailored solutions are invaluable.",
    },
    {
      name: "Priya Sharma",
      role: "Founder, SaaS Platform",
      feedback:
        "We needed an agile IT partner, and [Company Name] delivered. From cloud migration to dashboards, they kept us ahead.",
    },
    {
      name: "Michael Brown",
      role: "Operations Manager, Logistics Firm",
      feedback:
        "Their IT infrastructure overhaul reduced downtime by 40% and improved customer satisfaction across the board.",
    },
    {
      name: "Ayesha Khan",
      role: "Product Manager, HealthTech",
      feedback:
        "The attention to detail and commitment to deadlines exceeded expectations. We now have a robust system powering our growth.",
    },
  ];

  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center py-3">What client says about us!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      {testimonials.map((t, index) => (
        <div key={index} className="testimonial">
          <div className=" p-6 rounded-lg shadow-md hover:scale-105 transition-transform bg-gray-100">
            <div className="text-9xl font-bold">"</div>
            <p className="mt-2 text-gray-950 text-xl line-clamp-2">{t.feedback}</p>
            <h3 className="text-xl font-bold">{t.name}</h3>
            <span className="text-sm text-gray-600">{t.role}</span>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
