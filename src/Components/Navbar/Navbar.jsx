import React, { useState,useEffect } from "react";
import "./Navbar.css";
import Logo from "../../Assests/logo.png";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";



const Navbar = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [isDomesticOpen, setDomesticOpen] = useState(false);
  const [isInternationalOpen, setInternationalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  const indianStates = {
    "GUJARAT": ["Ahmedabad", "Surat", "Vadodara"],
    "MAHARASHTRA": ["Mumbai", "Pune", "Nagpur"],
    "Goa": [],
    "Himachal": ["Manali", "Shimla", "Dharamshala"],
    "Uttarakhand": ["Rishikesh", "Nainital", "Mussoorie"],
    "Odisha": ["Puri", "Bhubaneswar", "Konark"],
    "West Bengal": ["Kolkata", "Darjeeling"],
    "Jammu and Kashmir": ["Srinagar", "Gulmarg"],
    "Leh-Ladakh": [],
    "PUNJAB": ["Amritsar", "Chandigarh"],
    "TAMILNADU": ["Chennai", "Madurai"],
    "KARNATAKA": ["Bangalore", "Mysore"],
    "North East": ["Assam", "Meghalaya", "Arunachal"],
    "RAJASTHAN": ["Jaipur", "Udaipur", "Jodhpur"],
    "UTTAR PRADESH": ["Agra", "Varanasi", "Lucknow"],
    "KERALA": ["Cochin", "Munnar"],
    "ANDHRAPRADESH": ["Hyderabad", "Vijayawada"],
    "MADHYA PRADESH": ["Bhopal", "Indore"],
    "ANDMAN & NIKOBAR": ["Port Blair"],
    "Puducherry": [],
    "Lakshadweep": [],
    "DELHI & NCR": ["New Delhi", "Gurgaon", "Noida"],
  };

  const internationalCountries = {
    "Kuala Lumpur": [],
    "Singapore": [],
    "Thailand": ["Bangkok", "Phuket", "Pattaya"],
    "Sri Lanka": ["Colombo", "Kandy"],
    "Nepal": ["Kathmandu", "Pokhara"],
    "Hong Kong": ["Disneyland", "Victoria Peak"],
    "China": ["Beijing", "Shanghai"],
    "Japan": ["Tokyo", "Kyoto", "Osaka"],
    "Macao": ["Macau City"],
    "Kazakhstan": ["Almaty", "Nur-Sultan"],
    "EUROPE": ["Paris", "London", "Rome"],
    "Philippines": ["Manila", "Cebu"],
    "Canada": ["Toronto", "Vancouver"],
    "UNITED STATES (AMERICA)": ["New York", "Los Angeles"],
    "UAE (United Arab Emirates)": ["Dubai", "Abu Dhabi"],
    "Australia": ["Sydney", "Melbourne"],
    "South Africa": ["Cape Town", "Johannesburg"],
    "New Zealand": ["Auckland", "Wellington"],
    "Egypt": ["Cairo", "Luxor"],
    "Turkey": ["Istanbul", "Antalya"],
    "Maldives": [],
    "Bali": [],
  };
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <div className="mobileNavIcon__container">
  {/* Toggle Button */}
  <div onClick={toggleSidebar} className="mobileNavIcon__menu">
    {isOpen ? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} />}
  </div>

  <div className={`mobileNavIcon__nav ${isOpen ? "mobileNavIcon__nav--open" : ""}`}>
    <ul className="mobileNavIcon__nav-links">
      <Link to={"/"}><li className="active">Home</li></Link>

      <li
        className="mobileNavIcon__dropdown"
        onMouseEnter={() => setDomesticOpen(true)}
        onMouseLeave={() => setDomesticOpen(false)}
      >
        Domestic <span>&#9662;</span>
        {isDomesticOpen && (
          <ul className="mobileNavIcon__dropdown-menu">
            {Object.keys(indianStates).map((state) => (
              <li
                key={state}
                className={indianStates[state].length > 0 ? "mobileNavIcon__has-submenu" : ""}
                onMouseEnter={() => setHoveredState(state)}
                onMouseLeave={() => setHoveredState(null)}
              >
                {state} {indianStates[state].length > 0 && <span>&#9662;</span>}
                {hoveredState === state && indianStates[state].length > 0 && (
                  <ul className="mobileNavIcon__sub-menu">
                    {indianStates[state].map((city) => (
                      <li key={city}>{city}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>

      <li
        className="mobileNavIcon__dropdown"
        onMouseEnter={() => setInternationalOpen(true)}
        onMouseLeave={() => setInternationalOpen(false)}
      >
        International <span>&#9662;</span>
        {isInternationalOpen && (
          <ul className="mobileNavIcon__dropdown-menu">
            {Object.keys(internationalCountries).map((country) => (
              <li
                key={country}
                className={internationalCountries[country].length > 0 ? "mobileNavIcon__has-submenu" : ""}
                onMouseEnter={() => setHoveredCountry(country)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {country} {internationalCountries[country].length > 0 && <span>&#9662;</span>}
                {hoveredCountry === country && internationalCountries[country].length > 0 && (
                  <ul className="mobileNavIcon__sub-menu">
                    {internationalCountries[country].map((city) => (
                      <li key={city}>{city}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>

      <Link to={"/plans"}><li>Products & Services</li></Link>
      <Link to={"/about-us"}><li>About Us</li></Link>
      <Link to={"/contact-us"}><li>Contact Us</li></Link>
      <Link><li>Pay Now</li></Link>
    </ul>
  </div>
</div>



      <ul className="nav-links">
       

        <Link to={"/"}><li className="active">Home</li></Link>

        {/* Domestic Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setDomesticOpen(true)}
          onMouseLeave={() => setDomesticOpen(false)}
        >
          Domestic <span>&#9662;</span>
          {isDomesticOpen && (
            <ul className="dropdown-menu">
              {Object.keys(indianStates).map((state) => (
                <li
                  key={state}
                  className={indianStates[state].length > 0 ? "has-submenu" : ""}
                  onMouseEnter={() => setHoveredState(state)}
                  onMouseLeave={() => setHoveredState(null)}
                >
                  {state} {indianStates[state].length > 0 && <span>&#9662;</span>}
                  {hoveredState === state && indianStates[state].length > 0 && (
                    <ul className="sub-menu">
                      {indianStates[state].map((city) => (
                        <li key={city}>{city}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* International Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setInternationalOpen(true)}
          onMouseLeave={() => setInternationalOpen(false)}
        >
          International <span>&#9662;</span>
          {isInternationalOpen && (
            <ul className="dropdown-menu">
              {Object.keys(internationalCountries).map((country) => (
                <li
                  key={country}
                  className={internationalCountries[country].length > 0 ? "has-submenu" : ""}
                  onMouseEnter={() => setHoveredCountry(country)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  {country} {internationalCountries[country].length > 0 && <span>&#9662;</span>}
                  {hoveredCountry === country && internationalCountries[country].length > 0 && (
                    <ul className="sub-menu">
                      {internationalCountries[country].map((city) => (
                        <li key={city}>{city}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>

        <Link to={"/plans"}> <li>Products & Services</li></Link>
       <Link to={"/about-us"}> <li>About Us</li></Link>
        <Link to={"/contact-us"}><li>Contact Us</li></Link>
        <Link><li>Pay Now</li></Link>
      </ul>

    </nav>
  );
};

export default Navbar;
