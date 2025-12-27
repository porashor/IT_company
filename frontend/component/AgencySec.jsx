import React from 'react';
// Assuming you have a global CSS file for base styles or a Tailwind setup

const ServiceItem = ({ title, children }) => (
  <div className="flex items-start mb-4">
    {/* Checkbox icon Placeholder - use an actual icon library if preferred (e.g., Lucide, Heroicons) */}
    <svg className="w-5 h-5 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="www.w3.org">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
    </svg>
    <p className="text-gray-600">
      <strong className="text-gray-800">{title}:</strong> {children}
    </p>
  </div>
);

const Card = ({ title, children, className = '' }) => (
  <div className={`p-8 bg-white rounded-lg shadow-lg ${className}`}>
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
    {children}
  </div>
);

const AgencySection = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column Card */}
        <Card title="MyIt - Top Digital Marketing Agency In Bangladesh">
          <p className="mb-4 text-gray-600">
            MyIt Bangladesh's best digital marketing agency, was established in Dhaka, Chattogram in 2016. MyIT is a Digital Marketing Agency that offers a wide range of services like, Website Development, SEO services, SEM services, PPC services, Content Marketing and many more to engage prospective visitors on your website.
          </p>
          <p className="mb-6 text-gray-600">
            Best Online Marketing Agency comprises profound professionals that hold expertise in Internet Marketing. We are passionate about raising your business bars by using our digital marketing strategies and expertise.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ServiceItem title="Business consultation" />
            <ServiceItem title="Competitor Analysis" />
            <ServiceItem title="Creative services" />
            <ServiceItem title="Affordable price" />
            <ServiceItem title="Content Marketing" />
            <ServiceItem title="lead generation" />
          </div>
        </Card>

        {/* Right Column Container */}
        <div className="flex flex-col gap-8">
          
          {/* Top Right Card */}
          <Card title="Choose experts for growth">
            <p className="text-gray-600">
              We will accompany you to nurture business growth- rankings and traffic are not enough for growth; we offer growth in leads and sales by our effective marketing tactics!! We will thoroughly analyze your digital strategy and assist you in website designing, SEO, Content Marketing, PPC, and conversion augmentation to offer growth!!
            </p>
          </Card>

          {/* Bottom Right Card */}
          <Card title="Our love Internet & Marketing">
            <p className="text-gray-600">
              With a customer-centric approach and extensive marketing experience, we assure the success of your website, brand, and marketing tactics offer great results. We are at the forefront of digital marketing, and we know that every business has its diverse challenges and requirements; we offer tailored Internet Marketing Solutions.
            </p>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default AgencySection;
