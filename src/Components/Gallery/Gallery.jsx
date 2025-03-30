import React from 'react'
import "./Gallery.css"

const Gallery = () => {
  return (
    <div className="planMainContainer boxMainContainer">
    <div className="planContainer boxChildContainer">
        <div className="mainContent">
            <div className="mainContentButton">
                <h4>Posted by</h4>
                <h4>Posted on</h4>
            </div>
            <div className="imageContainer">
                <div className='image'>
                    <img src={require("../../Assests/testimonial1.webp")} alt="userImg" />
                </div>
                <div className='image'>
                    <img src={require("../../Assests/testimonial2.webp")} alt="userImg" />
                </div>
                <div className='image'>
                    <img src={require("../../Assests/testimonial3.webp")} alt="userImg" />
                </div>
                <div className='image'>
                    <img src={require("../../Assests/testimonial4.webp")} alt="userImg" />
                </div>
                <div className='image'>
                    <img src={require("../../Assests/testimonial1.webp")} alt="userImg" />
                </div>
                <div className='image'>
                    <img src={require("../../Assests/testimonial2.webp")} alt="userImg" />
                </div>
                <div className='image'>
                    <img src={require("../../Assests/testimonial3.webp")} alt="userImg" />
                </div>
                <div className='image'>
                    <img src={require("../../Assests/testimonial4.webp")} alt="userImg" />
                </div>
            </div>
            </div>

            </div>
            </div>


  )
}

export default Gallery
