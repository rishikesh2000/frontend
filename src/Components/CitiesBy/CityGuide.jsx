import React from "react";
import { FaMapMarkerAlt, FaTrain, FaPlane, FaWalking, FaHotel } from "react-icons/fa";
import "./CityGuide.css";

const CityGuide = () => {

  const city = {
    name: "Mumbai",
    description:
      "Mumbai, formerly known as Bombay, is the capital city of the Indian state of Maharashtra. It’s a cosmopolitan metropolis with a rich history and diverse culture.",
    image: require("../../Assests/ship.webp"), 
  
    places: [
      {
        name: "Marine Drive",
        description:
          "A scenic road along the Arabian Sea, perfect for sunset views and evening strolls.",
      },
      {
        name: "Gateway of India",
        description:
          "An iconic landmark built in 1924, overlooking the Arabian Sea.",
      },
      {
        name: "Chhatrapati Shivaji Maharaj Terminus",
        description:
          "A UNESCO World Heritage Site, known for its stunning architecture.",
      },
      {
        name: "Juhu Beach",
        description:
          "A popular beach famous for its street food and relaxing ambiance.",
      },
    ],
  
    activities: [
      {
        name: "Walking at Marine Drive",
        description: "Enjoy a leisurely walk along the promenade or catch the sunset.",
        activityImage:""
      },
      {
        name: "Street Food Tour",
        description: "Try delicious local delicacies like Vada Pav and Pav Bhaji.",
         activityImage:""
      },
      {
        name: "Bollywood Tour",
        description: "Explore Mumbai’s film industry and visit famous studios.",
         activityImage:""
      },
    ],
  
    transportation: [
      {
        name: "By Road",
        icon: <FaMapMarkerAlt size={50} />,
        description: "Mumbai has an extensive bus network operated by BEST.",
      },
      {
        name: "Mumbai Central Railway Station",
        icon: <FaTrain size={50} />,
        description: "A major railway station on the Western line of Mumbai.",
      },
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        icon: <FaPlane size={50} />,
        description: "Well-connected to domestic and international destinations.",
      },
    ],
  
    hotelDescription:
      "When it comes to choosing a place to stay in Mumbai, you have several options catering to different preferences and budgets.",
  
    hotels: [
      {
        name: "Novotel Mumbai Juhu Beach",
        description:
          "A luxurious beachfront property with 204 rooms and 6 dining options.",
        image: "https://source.unsplash.com/400x250/?hotel",
      },
      {
        name: "Four Seasons Hotel Mumbai",
        description:
          "A luxury 5-star hotel located in the emerging district of Worli with panoramic sea views.",
        image: "https://source.unsplash.com/400x250/?luxury-hotel",
      },
      {
        name: "The LaLiT Mumbai",
        description:
          "One of the best luxury hotels in Mumbai, conveniently located near the airport.",
        image: "https://source.unsplash.com/400x250/?resort",
      },
      {
        name: "Ramada by Wyndham Mumbai",
        description:
          "A stunning 5-star hotel near Juhu Beach with views of the Arabian Sea.",
        image: "https://source.unsplash.com/400x250/?hotel-room",
      },
    ],
  };
  
  
  return (

    <div className="planMainContainer boxMainContainer">
    <div className="planContainer boxChildContainer">
        <div className="mainContent">
            <div className="mainContentButton">
                <h4>Posted by</h4>
                <h4>Posted on</h4>
            </div>
            <div className="citiesContainer">
      <div className="mainTitle">
        <h2 style={{ color: "orange" }}>{`Let’s explore ${city.name}, the vibrant and bustling city on the west coast of India`}</h2>
        <p>{city.description}</p>
      </div>
      
      <div className="contentRow">
        <div className="mainImg">
          <img src={city.image} alt={city.name} />
        </div>
        <div className="textContent">
          <h2 style={{ color: "orange" }}>Best Places to Visit in {city.name}</h2>
          {city.places.map((place, index) => (
            <div className="placesContainer" key={index}>
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="underLine" />

      <div className="contentRow reverse">
      <div className="mainImg">
          <img src={require("../../Assests/ship.webp")} alt="Activities in the city" />
        </div>
        <div className="textContent">
          <h2 style={{ color: "orange" }}>Activities to Do in {city.name}</h2>
          {city.activities.map((activity, index) => (
            <div className="activitiesBox" key={index}>
             <span className="icon" style={{ color: "orange" }}>  <FaWalking size={40} /></span>
              <h3>{activity.name}</h3>
              <div>
                <span className="icon" style={{ color: "orange" }}> </span>
                <p>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
     
      </div>
      <div className="underLine" />

      <div className="contentRow">
        <div className="mainImg">
        <img src={require("../../Assests/ship.webp")} alt="Transport in city" />
        </div>
        <div className="textContent">
          <h2 style={{ color: "orange" }}>How to Reach {city.name}</h2>
          {city.transportation.map((way, index) => (
            <div className="destinationWayBox" key={index}>
              <span className="icon" style={{ color: "orange" }}> {way.icon} </span>
              <h3>{way.name}</h3>
              <p>{way.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="underLine" />

      <div className="hotelsDetails">
        <h2 style={{ color: "orange" }}>Best Places To Stay In {city.name}</h2>
        <p>{city.hotelDescription}</p>
        {city.hotels.map((hotel, index) => (
          <div className="contentRow" key={index}>
            <div className="hotelImg">
            <img src={require("../../Assests/ship.webp")} alt={hotel.name} />
            </div>
            <div className="textContent">
              <h2>{hotel.name}</h2>
              <p>{hotel.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
    </div>
    </div>

  );
};

export default CityGuide;
