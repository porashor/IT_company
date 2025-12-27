import React from "react";
import Slider from "react-slick";
import ai from "../img/ai.png";
import cloud from "../img/cloud.png";
import c247 from "../img/247.png";
import secure from "../img/secure.png";
import welcome from "../img/welcome.png";
import consult from "../img/consult.png";
import Aos from "aos";
const Banner = () => {
  // bannerData.js
  const bannerSlides = [
    {
      id: 1,
      title: "Welcome to Our IT Solutions",
      description:
        "We provide cutting-edge software and cloud services to help your business grow.",
      buttonText: "Get Started",
      image: welcome,
      bgColor: "#1D3E6D",
    },
    {
      id: 2,
      title: "Secure & Scalable Systems",
      description:
        "Our team builds secure, scalable applications tailored to your needs.",
      buttonText: "Learn More",
      image:secure,
      bgColor: "#0F172A",
    },
    {
      id: 3,
      title: "24/7 Support & Maintenance",
      description:
        "We ensure your systems run smoothly with round-the-clock monitoring.",
      buttonText: "Contact Us",
      image:c247,
      bgColor: "#111827",
    },
    {
      id: 4,
      title: "Cloud Transformation Experts",
      description:
        "Migrate to the cloud with confidence, scalability, and security built in.",
      buttonText: "Explore Cloud",
      image:cloud,
      bgColor: "#1E293B",
    },
    {
      id: 5,
      title: "AI & Automation Solutions",
      description:
        "Leverage artificial intelligence to streamline workflows and unlock new opportunities.",
      buttonText: "Discover AI",
      image: ai,
      bgColor: "#0A192F",
    },
    {
      id: 6,
      title: "Consulting & Innovation",
      description:
        "Partner with us to design innovative strategies that drive digital success.",
      buttonText: "Start Consulting",
      image:consult,
      bgColor: "#1B1B1B",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    afterChange: ()=>{
      Aos.refresh();
    }
  };
  return (
    <div className="w-full h-fit md:h-[600px] flex items-center p-2 md:p-5 text-white bg-[#1D3E6D]">
      {/* container */}
      <div className="w-full md:w-[80%] py-2 mx-auto">
        <Slider {...settings}>
          {bannerSlides.map((slide) => (
            <div  data-aos={slide.id % 2 === 0 ? "fade-right" : "fade-left"} className={`w-full ${"bg-"+slide.bgColor}`} style={{background: slide.bgColor}} key={slide.id}>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-2 items-center justify-between">
                {/* details */}
                <div className="flex flex-col items-center justify-center text-center md:text-left w-full h-full p-4">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="mb-6 text-center">
                    {slide.description}
                  </p>
                  <button className="bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-center">
                    {slide.buttonText}
                  </button>
                </div>
                {/* image  */}
                <div className="w-full flex justify-center items-center p-4">
                  <img  data-aos-delay="200" data-aos="fade-up" 
                    src={slide.image} className="w-[700px] aspect-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
