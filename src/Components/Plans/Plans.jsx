import React from "react";
import "./Plans.css";

const Plans = () => {
  const plans = [
    {
      name: "PURPLE",
      price: "₹11,54,396",
      description:
        "Tailored for peak festive days and premium vacations at exclusive resorts.",
      perks: "Studio (2 Adults + 2 Kids)",
      color: "#a020f0",
    },
    {
      name: "RED",
      price: "₹7,46,350",
      description:
        "Ideal for holiday during high-demand seasons at premium destinations.",
      perks: "Studio (2 Adults + 2 Kids)",
      color: "#ff0000",
    },
    {
      name: "WHITE",
      price: "₹5,67,259",
      description:
        "Suitable for travel just before and after peak seasons at luxurious stays.",
      perks: "Studio (2 Adults + 2 Kids)",
      color: "#000000",
    },
    {
      name: "BLUE",
      price: "₹4,07,350",
      description:
        "Designed for off-peak vacations with comfortable accommodations.",
      perks: "Studio (2 Adults + 2 Kids)",
      color: "#0000ff",
    },
  ];

  return (
    
    <div className="planMainContainer boxMainContainer">
      <div className="planContainer  boxChildContainer">
      <div className="mainContent">
        <div className="mainContentButton" >
          <h4>Posted by</h4>
          <h4>Posted on</h4>

        </div>
        <div className="mainContentText">
    <p>
    The Sheraton Holidays International has an association with 1000+ breath taking Resorts, Hotels, Villas, Cottages and Tree Houses in Domestic and International locations. The Sheraton Holidays International packages offers a world of benefits. Here, you can make the most of your package. We also facilitate EMI options for our packages as we have tie ups with almost all major banks.
</p>
<p>
Enjoy 1000+ Hotels & Resorts Word Wide As a part of the TSHI (The Sheraton Holidays International) member, you get entry to more than 1000 magnificent resorts across India and the world. We’ve warm hospitality, excellent services, and holiday experiences, ranging from the wild forests and the tranquil backwater of Kerala to Singapore’s electric bustle and the incredible elegance of Finland. Suppose you find like you’ve very little access to over 1000 resorts.
    </p>
    </div>

    <div className="hightLightPlans">
      <div className="hightLightPlansText">
      <h3>SOME HIGHTLIGHTS OF THE</h3>
      <h3>THE SHERATON HOLIDAYS INTERNATIONAL
      </h3>
      <h3>MEMBERSHIP PLANS</h3>
       <ul>
        <ol>1. 25 Year of Luxurious Holiday packages accessible</ol>
        <ol> 2. 6 Nights/7Days at 100+ destinations worldwide</ol>
        <ol>  3. Wide Range of diverse activities</ol>
        <ol> 4. Discounts on international flights.</ol>
        <ol>  5. Flight assistance, dedicated customized holiday
        </ol>
        <ol>6. vouchers or RCV (resort credit voucher).</ol>
        <ol>7. Travel Concierge Services</ol>

       </ul>
      </div>
      <div className="hightLightPlanImg">
        <img src={require("../../Assests/plansImg.webp")} alt="hightLightPlanImg" />
      </div>
    </div>
    <div className="studioRoom">
      <h3> STUDIO ROOM</h3>
<p>This Is Significantly Larger to Suite Category ideal for 2 Adults and 2 kids. Being a proud member of The Sheraton Holidays International, you get entry to more than 1000 magnificent resorts across India and the world. We’ve warm hospitality, excellent services, and holiday experiences, ranging from the wild forests and the tranquil backwater of Kerala to Singapore’s electric bustle and the incredible elegance of Finland. Suppose you find like you’ve very little access to over 1000 resorts. </p>
    </div>
    <div className="studioRoom">
      <h3> TYPES OF MEMBERSHIP</h3>
<p> There are four levels of membership of The Sheraton Holidays International, enjoy great rewards with amazing experiences with your family and loved ones throughout your tenure of your membership plans. Come experience the beauty of the world with us…</p>
    </div>


     


<div>
      <h2>Membership Price List – 2025</h2>
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card" style={{ borderColor: plan.color }}>
            <div className="plan-ribbon" style={{ background: plan.color }}>
              {plan.name}
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
        <img src="https://via.placeholder.com/600x300" alt="Special Deals" />
        <div className="deals-text">
          <h3>Special Deals</h3>
          <p>Exclusive limited-time offers available only through our family campaigns.</p>
        </div>
      </div>
    </div>
      </div>
      </div>
    </div>
  );
};

export default Plans;
