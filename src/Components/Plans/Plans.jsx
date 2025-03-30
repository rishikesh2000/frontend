import React from "react";
import "./Plans.css";

const Plans = () => {
  const plans = [
    {
      name: "PURPLE",
      plan:"FEATURED",
      price: "₹11,54,396",
      description:
        "Tailored for peak festive days and premium vacations at exclusive resorts.",
      perks: "Studio (2 Adults + 2 Kids)",
      color: "#a020f0",
    },
    {
      name: "RED",
      plan:"FEATURED",
      price: "₹7,46,350",
      description:
        "Ideal for holiday during high-demand seasons at premium destinations.",
      perks: "Studio (2 Adults + 2 Kids)",
      color: "#ff0000",
    },
    {
      name: "WHITE",
      plan:"FEATURED",
      price: "₹5,67,259",
      description:
        "Suitable for travel just before and after peak seasons at luxurious stays.",
      perks: "Studio (2 Adults + 2 Kids)",
      color: "#000000",
    },
    {
      name: "BLUE",
      plan:"FEATURED",
      price: "₹4,07,350",
      description:
        "Designed for off-peak vacations with comfortable accommodations.",
      perks: "Studio (2 Adults + 2 Kids)",
      color: "#0000ff",
    },
  ];

  return (
    <div className="planMainContainer boxMainContainer">
      <div className="planContainer boxChildContainer">
        <div className="mainContent">
          <div className="mainContentButton">
            <h4>Posted by</h4>
            <h4>Posted on</h4>
          </div>
          <div className="mainContentText">
            <p>
              The Nayara Holidays has an association with 1000+ breathtaking resorts, hotels, villas, cottages, and treehouses in domestic and international locations. The Nayara Holidays packages offer a world of benefits. Here, you can make the most of your package. We also facilitate EMI options for our packages as we have tie-ups with almost all major banks.
            </p>
            <p>
              Enjoy 1000+ Hotels & Resorts Worldwide. As a part of the Nayara Holidays member, you get entry to more than 1000 magnificent resorts across India and the world. We offer warm hospitality, excellent services, and holiday experiences, ranging from the wild forests and the tranquil backwaters of Kerala to Singapore’s electric bustle and the incredible elegance of Finland.
            </p>
          </div>
          <div className="hightLightPlans">
            <div className="hightLightPlansText">
              <h3>SOME HIGHLIGHTS OF THE</h3>
              <h3>THE NAYARA HOLIDAYS MEMBERSHIP PLANS</h3>
              <ul>
                <li>1. 25 Years of Luxurious Holiday packages accessible</li>
                <li>2. 6 Nights/7 Days at 100+ destinations worldwide</li>
                <li>3. Wide Range of diverse activities</li>
                <li>4. Discounts on international flights</li>
                <li>5. Flight assistance, dedicated customized holiday</li>
                <li>6. Vouchers or RCV (resort credit voucher)</li>
                <li>7. Travel Concierge Services</li>
              </ul>
            </div>
            <div className="hightLightPlanImg">
              <img src={require("../../Assests/plansImg.webp")} alt="hightLightPlanImg" />
            </div>
          </div>
          <div className="studioRoom">
            <h3>STUDIO ROOM</h3>
            <p>This is significantly larger than the suite category, ideal for 2 adults and 2 kids. Being a proud member of The Nayara Holidays, you get entry to more than 1000 magnificent resorts across India and the world, offering warm hospitality, excellent services, and unforgettable holiday experiences.</p>
          </div>
          <div className="membershipCon">
            <h3>TYPES OF MEMBERSHIP</h3>
            <p>There are four levels of membership at The Nayara Holidays. Enjoy great rewards with amazing experiences with your family and loved ones throughout the tenure of your membership plans. Come experience the beauty of the world with us.</p>
          </div>
          <div className="membershipPrice">
            <h3>Membership Price List – 2025</h3>
            <div className="plans-grid">
              {plans.map((plan, index) => (
                <div key={index} className="plan-card" style={{ borderColor: plan.color }}>
                  <div className="plan-ribbon" style={{ background: plan.color }}>
                    {plan.plan}
                  </div>
                  <h3>{plan.name}</h3>
                  <h4>{plan.price}</h4>
                  <p>{plan.description}</p>
                  <p className="plan-perks">{plan.perks}</p>
                  <button style={{ background: plan.color }}>CHOOSE PLAN</button>
                </div>
              ))}
            </div>
            <div className="special-deals">
              <img src={require("../../Assests/spacialDeal.webp")} alt="Special Deals" />
              <div className="deals-text">
                <h3>Special Deals</h3>
                <p>We also have special deals, but they are available only during our promotional campaigns, under our exclusive “Today’s Offer” scheme.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Terms and conditions apply.</h3>
        </div>
      </div>
    </div>
  );
};

export default Plans;
