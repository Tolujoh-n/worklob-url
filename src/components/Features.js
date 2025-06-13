import React from "react";
import features1 from "../assets/img/talent-cus-no-bg.png";
import features2 from "../assets/img/ai-agent-screen.png";
import features3 from "../assets/img/atm-card-ui.png";
// import features3 from "../assets/img/loanimg.png";
// import features4 from "../assets/img/trade-ui.png";

const features = [
  {
    id: 1,
    title: "The Ultimate Decentralized Job Platform",
    description:
      "WorkLoob seamlessly connects job seekers, employers, and freelancers through a decentralized ecosystem, leveraging blockchain to create opportunities globally.",
    list: [
      "Empowering freelancers with secure and transparent contracts.",
      "Providing employers access to top-tier global talent.",
      "Enabling fast, borderless payments through cryptocurrency.",
    ],
    image: features1,
    delay: 100,
  },
  {
    id: 2,
    title: "AI-Agent Marketplace for specialized Tasks",
    description:
      "Revolutionizing productivity with AI-driven agents designed to assist users in completing specialized tasks efficiently.",
    additionalDescription:
      "Our intelligent AI agents provide tailored solutions, automating complex workflows, streamlining processes, and ensuring optimal results to meet your unique needs.",
    image: features2,
    delay: 200,
    reverse: true,
  },
  {
    id: 3,
    title: "Spend Crypto Without Limits with our crypto ATM Card",
    description:
      "Tired of watching your money lose value overnight? With our crypto-powered ATM card, you stay ahead of inflation and unlock the true freedom of your funds — anytime, anywhere.",
    list: [
      "Stay safe from inflation — spend stablecoins instead of losing value.",
      "Pay less — enjoy low or zero fees when spending or withdrawing.",
      "Use it anywhere — shop or withdraw cash at ATMs and POS machines.",
    ],
    image: features3,
  },
  // {
  //   id: 3,
  //   title: "NFT-Backed Lending and Borrowing",
  //   description:
  //     "Unlock liquidity using your NFTs as collateral to access stablecoin loans on the Base blockchain, all without intermediaries.",
  //   list: [
  //     "Borrow stablecoins instantly by using NFTs as collateral.",
  //     "Secure and transparent smart contract-based lending.",
  //     "Earn rewards by providing liquidity to borrowers.",
  //   ],
  //   image: features3,
  // },
  // {
  //   id: 4,
  //   title: "Spot and Futures Trading with AI Assistance",
  //   description:
  //     "Enhance your trading experience with AI-driven support, making spot and futures trading seamless, efficient, and profitable.",
  //   additionalDescription:
  //     "Chat with our AI assistant to execute trades effortlessly. Whether you're trading in the spot market or leveraging futures positions, the AI provides real-time market insights, risk management strategies, and automated execution to optimize your trading performance.",
  //   image: features4,
  //   reverse: true,
  // },
];

const Features = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`row gy-4 align-items-center features-item ${
              feature.reverse ? "flex-md-row-reverse" : ""
            }`}
          >
            <div className="col-md-5 d-flex align-items-center">
              <img
                src={feature.image}
                className="img-fluid"
                alt={`Feature ${index + 1}`}
              />
            </div>
            <div className="col-md-7">
              <h3>{feature.title}</h3>
              <p className="fst-italic">{feature.description}</p>
              {feature.list && (
                <ul>
                  {feature.list.map((item, idx) => (
                    <li key={idx}>
                      <i className="bi bi-check"></i> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {feature.additionalDescription && (
                <p>{feature.additionalDescription}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
