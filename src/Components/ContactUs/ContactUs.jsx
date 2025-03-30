import React from 'react'
import "./ContactUs.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="planMainContainer boxMainContainer">
            <div className="planContainer boxChildContainer">
                <div className="mainContent">
                    <div className="mainContentButton">
                        <h4>Posted by</h4>
                        <h4>Posted on</h4>
                    </div>
                    <div className='contact-banner'>
                        <h2>Contact-Us</h2>

                    </div>
                    <div className="contactContainer">
                        <div className="contactForm">
                            <h2>We're Ready, Let's Talk.</h2>
                            <form action="#">
                                <input type="text" placeholder='Enter Your Name' required />
                                <input type="text" placeholder='Enter Your Number' required />
                                <input type="text" placeholder='Enter Your Email' required />
                                <input type="text" placeholder='Enter Your City' required />
                                <input type="text" placeholder='Enter Your Country' required />
                                <textarea type="text" placeholder='Enter Your Message' required />
                                <button>Send Message</button>
                            </form>
                        </div>
                        <div className="contactDetails">
                            <h2>Contact Info
                            </h2>
                            <div className="details">
                                <h2>Address​</h2>
                                <p>Add- Indore</p>
                            </div>
                            <div className="details">
                                <h2>Email Us​</h2>
                                <p>info@thenayaraholidays.com</p>
                            </div>

                            <div className="details">
                                <h2>Call Us </h2>
                                <p>+91-56565-95656</p>
                            </div>
                            <div className="details">
      <h2>Follow Us</h2>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
          <FaFacebookF size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
          <FaInstagram size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ContactUs
