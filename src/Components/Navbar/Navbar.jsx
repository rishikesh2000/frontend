import React, { useState, useEffect } from "react";
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
    "GUJARAT": ["Gir", "Diu", "Bhuj-Kutch", "Ahmedabad", "Surat", "Somnath", "Dwarka"],
    "MAHARASHTRA": ["Mumbai", "Nashik", "Lonavala", "Mahabaleshwar", "Pune", "Goa"],
    "HIMACHAL PRADESH": ["Manali", "Shimla", "Dharamshala", "Dalhousie"],
    "UTTARAKHAND": ["Rishikesh", "Nainital", "Mussoorie", "Kedarnath", "Haridwar", "Dehradoon", "Jim Corbett"],
    "ODISHA": ["Bhuvneshwar"],
    "WEST BENGAL": ["Kolkata", "Darjeeling", "Siliguri"],
    "JAMMU AND KASHMIR": ["Jammu", "Katra", "Srinagar", "Gulmarg", "Pahalgam", "Leh-Ladakh"],
    "PUNJAB": ["Amritsar", "Chandigarh"],
    "TAMIL NADU": ["Chennai", "Ooty", "Coimbatore", "Kodaikanal", "Rameswaram", "Kanyakumari"],
    "KARNATAKA": ["Coorg", "Bangalore", "Chikmagalur", "Hampi"],
    "NORTH EAST": ["Gangtok", "Sikkim"],
    "RAJASTHAN": ["Jaipur", "Neemrana", "Udaipur", "Kumbhalgarh", "Jaisalmer", "Jodhpur", "Sariska", "Ranthambore", "Mount Abu", "Pushkar"],
    "UTTAR PRADESH": ["Agra", "Lucknow", "Varanasi", "Mathura"],
    "KERALA": ["Kochi", "Munnar", "Thiruvananthapuram", "Alleppey (House Boats)", "Alleppey (Hotels)", "Kovalam", "Wayanad"],
    "ANDHRA PRADESH": ["Tirupati", "Hyderabad", "Visakhapatnam"],
    "MADHYA PRADESH": ["Kanha", "Gwalior", "Bhopal", "Indore", "Ujjain"],
    "ANDAMAN & NICOBAR": ["Port Blair", "Havelock Island", "Neil Island"],
    "PUDUCHERRY": ["Puducherry"],
    "LAKSHADWEEP": ["Lakshadweep"],
    "DELHI & NCR": ["Aerocity", "Gurugram", "Faridabad", "Noida", "Ghaziabad", "Delhi"]
  };

  const internationalCountries = {
    "MALAYSIA": ["Kuala Lumpur"],
    "SINGAPORE": ["Singapore"],
    "SRI LANKA": ["Colombo", "Kandy", "Galle"],
    "NEPAL": ["Kathmandu", "Pokaran", "Bagmati"],
    "HONG KONG": ["Hong Kong"],
    "CHINA": ["China"],
    "JAPAN": ["Japan"],
    "MACAO": ["Macao"],
    "KAZAKHSTAN": ["Almaty"],
    "EUROPE": ["Netherlands", "Hungary", "Poland", "Belgium", "Greece", "Norway", "France", "Germany", "Spain", "Italy", "United Kingdom", "Russia", "Switzerland"],
    "PHILIPPINES": ["Philippines"],
    "CANADA": ["Toronto", "Vancouver"],
    "UNITED STATES": ["Chicago", "Los Angeles", "Dallas"],
    "UAE": ["Abu Dhabi", "Dubai"],
    "SAUDI ARABIA": ["Saudi Arabia"],
    "AUSTRALIA": ["Australia"],
    "SOUTH AFRICA": ["South Africa"],
    "NEW ZEALAND": ["New Zealand"],
    "EGYPT": ["Egypt"],
    "TURKEY": ["Istanbul"],
    "THAILAND": ["Pattaya", "Phi Phi Islands", "Phuket", "Krabi", "Bangkok"],
    "MALDIVES": ["Maldives"],
    "BALI": ["Bali"]
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
          {<GiHamburgerMenu size={25} />}
        </div>

        <div className={`mobileNavIcon__nav ${isOpen ? "mobileNavIcon__nav--open" : ""}`}>
          <div onClick={toggleSidebar} className="mobileNavIcon__menu closeicon">
            {<AiOutlineClose size={25} />}
          </div>
          <ul className="mobileNavIcon__nav-links">
            <Link to={"/"}><li>Home</li></Link>

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
                             <li key={city}>
                             <Link to={`/${encodeURIComponent(city.toLowerCase())}`}>{city}</Link>
                         </li>
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
                             <li key={city}>
                             <Link to={`/${encodeURIComponent(city.toLowerCase())}`}>{city}</Link>
                         </li>))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <Link to={"/plans"}><li>Products & Services</li></Link>
            <Link to={"/about"}><li>About Us</li></Link>
            <Link to={"/contact"}><li>Contact Us</li></Link>
            <Link to={"/"}><li>Pay Now</li></Link>
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
                        <li key={city}>
                        <Link to={`/${encodeURIComponent(city.toLowerCase())}`}>{city}</Link>
                    </li>

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
                       <li key={city}>
                       <Link to={`/${encodeURIComponent(city.toLowerCase())}`}>{city}</Link>
                   </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>

        <Link to={"/plans"}> <li>Products & Services</li></Link>
        <Link to={"/about"}> <li>About Us</li></Link>
        <Link to={"/contact"}><li>Contact Us</li></Link>
        <Link><li>Pay Now</li></Link>
      </ul>

    </nav>
  );
};

export default Navbar;
