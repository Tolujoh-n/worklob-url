import React from "react";
import services1 from "../assets/img/features/low-fees-n.png";
import services2 from "../assets/img/features/reputation-n.png";
import services3 from "../assets/img/features/cypto-payment-n.png";
import services4 from "../assets/img/features/ai-agent-n.png";
import services5 from "../assets/img/features/trading-n.png";
import services6 from "../assets/img/features/crypto-staking-n.png";

const services = [
  {
    id: 1,
    title: "Low Commissions",
    description:
      "WorkLoob offers the lowest commission rates in the industry, with 3% for Freelancers and 0% for Customers. Premium users enjoy fee-free transactions!",
    icon: "bi bi-cash-coin",
    image: services1,
    delay: 200,
  },
  {
    id: 2,
    title: "Reputation System",
    description:
      "Our reputation module ensures fair evaluations by analyzing reviews, completed contracts, education, and previous work experience.",
    icon: "bi bi-star-fill",
    image: services2,
    delay: 300,
  },
  {
    id: 3,
    title: "Crypto Payments",
    description:
      "WorkLoob supports multiple cryptocurrencies, ensuring fast and borderless transactions between Customers and Freelancers.",
    icon: "bi bi-wallet2",
    image: services3,
    delay: 400,
  },
  {
    id: 4,
    title: "AI-Agents for Specialized task",
    description:
      "AI-driven agents, designed to assist users in completing specialized tasks efficiently. Our AI agents marketplace provide tailored solutions AI to meet your unique needs.",
    icon: "bi bi-robot",

    image: services4,
    delay: 500,
  },
  {
    id: 5,
    title: "Spot and Futures Trading with AI",
    description:
      "Our platform offers real-time insights, automated trade execution, and advanced risk management tools to optimize your trading strategy with AI-powered assistance.",
    icon: "bi bi-graph-up",
    image: services5,
    delay: 600,
  },
  {
    id: 6,
    title: "Staking for Passive Rewards",
    description:
      "Stake your LOB tokens securely and earn passive rewards while contributing to network security. Our staking system ensures transparency and optimal returns for users",
    icon: "bi bi-cash-stack",
    image: services6,
    delay: 700,
  },
];

const Service = () => {
  return (
    <section id="featured-services" className="featured-services section">
      <div className="container">
        <div className="row gy-5">
          {services.map((service) => (
            <div key={service.id} className="col-xl-4 col-md-6">
              <div className="service-item">
                <div className="img">
                  <img
                    src={service.image}
                    className="img-fluid"
                    alt={service.title}
                  />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
