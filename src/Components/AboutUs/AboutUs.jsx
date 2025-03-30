import React from 'react'
import "./AboutUs.css"
import { TfiLayoutLineSolid } from "react-icons/tfi";



const AboutUs = () => {
    return (
        <div className="planMainContainer boxMainContainer">
            <div className="planContainer boxChildContainer">
                <div className="mainContent">
                    <div className="mainContentButton">
                        <h4>Posted by</h4>
                        <h4>Posted on</h4>
                    </div>
                    <div className='aboutPoster'>
                        <h2>Who We Are?</h2>
                    </div>

                    <div className='ourMisson'>
                        <div className="missionText">
                            <h2>Our Mission</h2>
                            <TfiLayoutLineSolid size={50}/>
                            <p>
                                To enrich people’s lives with unforgettable travel experiences, connecting them to new cultures, places, and faces, making the world more accessible and your dreams more achievable.
                            </p>

                        </div>
                        <div className="missionImg">
                            <img src={require("../../Assests/outdoorAbout.webp")} alt="aboutUsBanner" />
                        </div>
                        
                    </div>
                    <div className="coreVlues">
                            <div className="coreValueText1">
                                <h2>Extraordinary Experiences</h2>
                                <TfiLayoutLineSolid size={50}/>

                                <p>We believe in creating extraordinary moments that leave lasting memories. Our tailored itineraries and personal touches ensure that every destination becomes a highlight of your life story.</p>
                            </div>
                            <div className="coreValueText2">
                                <h2>Our Core Values</h2>
                                <TfiLayoutLineSolid size={50}/>

                                <p>From unique travel routes to cutting-edge technology, we’re always seeking new ways to enhance your travel experience.</p>
                                <p>
                                    <ol><span> <TfiLayoutLineSolid size={15} style={{ strokeWidth: 2 }} /></span> <span>Passion for Travel</span></ol>
                                    <ol><span><TfiLayoutLineSolid size={15} style={{ strokeWidth: 2 }} /></span><span>Integrity in Service</span></ol>
                                    <ol><span><TfiLayoutLineSolid size={15} style={{ strokeWidth: 2 }} /></span><span>Innovation in Every Step</span></ol>

                                </p>
                            </div>

                        </div>
                </div>
            </div>
        </div>


    )
}

export default AboutUs
