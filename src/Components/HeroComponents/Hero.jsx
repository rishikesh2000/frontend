import React, { useEffect, useState } from "react";
import v1 from "../../Assests/video1.mp4"
import v2 from "../../Assests/video2.mp4"
import Logo from "../../Assests/logo.png"
import "./Hero.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../Assests/delhi.webp"
import img2 from "../../Assests/himalaya.webp"
import img3 from "../../Assests/Kedarnath-Temple.webp"
import img4 from "../../Assests/kolkata.webp"
import { FaPlane, FaHotel, FaPassport, FaLaptop, FaMapMarkedAlt } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import partnerImg1 from "../../Assests/goibibo.webp"
import partnerImg2 from "../../Assests/makeMytrip.webp"
import partnerImg3 from "../../Assests/yatra.jpg"
import partnerImg4 from "../../Assests/Hotels.webp"
import shipImg from "../../Assests/ship.webp"
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";










const videoSources = [
  v1,
  v2,
  v1,
  v2,
  v1,
];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(videoSources[0]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo(videoSources[Math.floor(Math.random() * videoSources.length)]);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, []);

  


   const  travel= [
      { src: partnerImg1, alt: "logo" },
      { src: partnerImg2, alt: "logo"},
      { src: partnerImg3, alt: "logo" },
      { src: partnerImg4, alt: "logo" },

    ]
   const  airlines= [
    { src: partnerImg1, alt: "logo" },
    { src: partnerImg2, alt: "logo"},
    { src: partnerImg3, alt: "logo" },
    { src: partnerImg4, alt: "logo" },
    ]


    const testimonials = [
      {
        name: "Suneeta",
        text: "From the warm hospitality to the stunning scenery, every aspect was top-notch. An exceptional travel experience that catered to all our desires.",
        img:  require("../../Assests/testimonial3.webp")
        ,
      },
      {
        name: "Rahul",
        text: "The service was fantastic! Every detail was taken care of, and we felt truly special throughout our journey.",
        img:  require("../../Assests/testimonial1.webp")
      },
      {
        name: "Priya",
        text: "Absolutely loved the experience! The arrangements were flawless, and the hospitality was beyond amazing.",
        img:  require("../../Assests/testimonial2.webp")
      },
      {
        name: "Amit",
        text: "One of the best trips ever! From the food to the accommodations, everything exceeded my expectations.",
        img:  require("../../Assests/testimonial4.webp")
      },
    ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const textVariants = {
    enter: (direction) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction) => ({
      y: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  const imageVariants = {
    enter: (direction) => ({
      y: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
  };


  return (
    <>
    <div className="hero-container">
      <video key={currentVideo} className="hero-video" autoPlay loop muted>
        <source src={currentVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <img src={Logo} alt="Logo" className="hero-logo" />
      </div>
    </div>

    <div className="hero-container2">
      {/* Scrolling Text */}
      <div className="scrolling-text">
        <p>Nayara Holidays * BRN Hotel Kedarnath Part Of Nayara Holidays.
        </p>
      </div>

      {/* Main Content */}
      <h1 className="hero-title">The Nayara Holidays.</h1>

      <div className="hero-content">
        {/* Left Side - Logo */}
        <div className="hero-logo">
          <img src={Logo} alt="Sheraton Logo" />
        </div>

        {/* Right Side - Text */}
        <div className="hero-text">
          <h2 className="who-we-are">WHO WE ARE?</h2>
          <p>
            For our members, it’s just around the corner. We all get caught up
            in daily responsibilities, but with The Sheraton Holidays
            International, you don’t have to. Enjoy destinations, events, and
            experiences that help you break from the routine.
          </p>
        </div>
      </div>
    </div>
    <div className="hero-container3">
    <video key={currentVideo} className="hero-video" autoPlay loop muted>
        <source src={currentVideo} type="video/mp4" />
      </video>
    </div>
<div className="hero-container-slider">
    <div className="exotic-slider">
      <h2 className="slider-title">MOST EXOTIC PLACES</h2>
      <Swiper
  slidesPerView={3}  
  spaceBetween={15} 
  centeredSlides={true}  
  loop={true} 
  navigation={true} 
  // pagination={{ clickable: true }}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  modules={[Navigation, Pagination,Autoplay]}
  className="custom-swiper"
  breakpoints={{
    320: { slidesPerView: 1 }, 
    450: { slidesPerView: 1 }, 
    650: { slidesPerView: 2 }, 
  }}

>
  {[
    { img: img2, name: "HIMALAYAS" },
    { img: img1, name: "DELHI" },
    { img: img3, name: "KEDARNATH" },
    { img: img4, name: "Goa" }
  ].map((place, index) => (
    <SwiperSlide key={index}>
      <div className="slide-item">
        <img src={place.img} alt={place.name} />
        <div className="overlay">
          <h3>{place.name}</h3>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


    </div>
    </div>

    <div className="hero-container5">
    <div className="services-section">
      <div className="services-left">
        <h2>The Nayara Holidays.
        </h2>
        <h1>Services</h1>
      </div>
      <div className="services-right">
        <div className="services-overlay"></div>
        
        <div className="service-box">
          <FaLaptop className="icon" />
          <h3>ONLINE BOOKING SERVICES</h3>
          <p>Find best deals at The Nayara Holidays for flight Tickets, Hotels, Holiday Packages, for India & International travel.</p>
        </div>

        <div className="service-box">
          <FaPlane className="icon" />
          <h3>BOOK CHEAP FLIGHT</h3>
          <p>Get best discounts and deals on domestic and International flights booking around the world.</p>
        </div>

        <div className="service-box">
          <FaHotel className="icon" />
          <h3>HOTEL BOOKING</h3>
          <p>Book cheap, budget and luxury hotels at best price comparison than other leading companies.</p>
        </div>

        <div className="service-box">
          <FaPassport className="icon" />
          <h3>Passport Services</h3>
          <p>Effortlessly obtain, renew, or expedite your passport with our expert assistance.</p>
        </div>
      </div>
    </div>

    </div>

    <div className="hero-container6">
    <div className="statistics" ref={ref}>
    <div>
    <h2>
          {inView ? <CountUp start={0} end={100} duration={2.5} /> : "0"}
        </h2>      <p>Countries</p>
    </div>
    <div>
    <h2>
          {inView ? <CountUp start={0} end={7000} duration={3} separator="," /> : "0"}
        </h2>      <p>Destinations</p>
    </div>
    <div>
    <h2>
          {inView ? <CountUp start={0} end={1000} duration={2} separator="," /> : "0"}
        </h2>      <p>Vacation Options</p>
    </div>
    <div>
    <h2>
          {inView ? <CountUp start={0} end={500} duration={1.5} separator="," /> : "0"}
        </h2>      <p>Members</p>
    </div>
  </div>

  <div className="partner-section">
    <h3>PREFERRED TRAVEL PARTNERS  </h3>
    <Swiper
    slidesPerView={3}  
    spaceBetween={15} 
    centeredSlides={true}  
    loop={true} 
    navigation={true} 
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    modules={[Navigation, Pagination,Autoplay]}



    
      className="partner-carousel"
    >
      {travel.map((partner, index) => (
        <SwiperSlide key={index} className="partner-card">
          <img src={partner.src} alt={partner.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  <div className="partner-section">
    <h3>PREFERRED AIRLINES PARTNERS</h3>
    <Swiper
       slidesPerView={3}  
       spaceBetween={15} 
       centeredSlides={true}  
       loop={true} 
       navigation={true} 
       autoplay={{ delay: 2000, disableOnInteraction: false }}
       modules={[Navigation, Pagination,Autoplay]}
     
      className="partner-carousel"
    >
      {airlines.map((partner, index) => (
        <SwiperSlide key={index} className="partner-card">
          <img src={partner.src} alt={partner.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
    </div>

    <div className="hero-container-slider">
    <div className="exotic-slider">
      <h2 className="slider-title" style={{color:"#ffcc00"}}>International Destinations</h2>
      <Swiper
  slidesPerView={3}  
  spaceBetween={15} 
  centeredSlides={true}  
  loop={true} 
  navigation={true} 
  // pagination={{ clickable: true }}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  modules={[Navigation, Pagination,Autoplay]}
  className="custom-swiper"
  breakpoints={{
    320: { slidesPerView: 1 }, 
    450: { slidesPerView: 1 }, 
    650: { slidesPerView: 2 }, 
  }}
>
  {[
    { img: img2, name: "SPAIN" },
    { img: img1, name: "DUBAI" },
    { img: img3, name: "SINGAPORE" },
    { img: img4, name: "NETHERLANDS" }
  ].map((place, index) => (
    <SwiperSlide key={index}>
      <div className="slide-item">
        <img src={place.img} alt={place.name} />
        <div className="overlay">
          <h3>{place.name}</h3>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


    </div>

    </div>

    <div className="hero-container7">
    <div className="cruise-banner">
      <div className="cruise-text">
        <h1>Book now your upcoming vacation with us and win a Holiday in Cruise.</h1>
        <button className="know-more-btn">KNOW MORE</button>
      </div>
      <div className="cruise-image">
        <img
          src={shipImg}
          alt="Cruise Ship"
        />
      </div>
    </div>
    </div>
  <div className="hero-container8">
  <div className="testimonial-slider">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          variants={textVariants}
          transition={{ duration: 0.5 }}
          className="testimonial-text"
        >
          <h3>Testimonials</h3>
          <h1>{testimonials[index].name}</h1>
          <p>{testimonials[index].text}</p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          className="testimonial-image"
        >
          <img src={testimonials[index].img} alt={testimonials[index].name} />
        </motion.div>
      </AnimatePresence>

      <button onClick={prevSlide}>{"<"}</button>
      <button onClick={nextSlide}>{">"}</button>
    </div>
    

  </div>

  <div className="hero-container9">
  <div className="booking-container">
      {/* Left Section */}
      <div className="booking-info">
        <h1 className="typing-effect">BOOK NOW!</h1>
        <p>
          Experience the various exciting vacation packages and make your reservations
        </p>
        <div className="icons-container">
          <div className="icon-box">
          <FaMapMarkedAlt size={60} color="white" />
          <p>Destinations</p>
          </div>
          <div className="icon-box">
          <FaPlane size={60} color="white" />
          <p>Flights</p>
          </div>
          <div className="icon-box">
          <FaHotel size={60} color="white" />
          <p>Hotels</p>
          </div>
        </div>
      </div>

      {/* Right Section - Booking Form */}
      <div className="booking-form">
        <h2>BOOKING FORM</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Phone" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Country" required />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </div>

</>
  );
};

export default Hero;
