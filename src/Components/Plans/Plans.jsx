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
    
    <div className="plans-container">
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
  );
};

export default Plans;
