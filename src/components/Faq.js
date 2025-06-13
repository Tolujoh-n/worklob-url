import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What are the benefits of freelancing for crypto?",
      answer:
        "Because cryptocurrency is borderless and global, anyone can apply for a job and get paid, no matter where our Freelancers and Customers are in the world, and regardless of whether they have access to banking services. Crypto job payments are efficient, and blockchain technology enables a truly free and frictionless labour market. Freelancing is also a good way to earn crypto, an attractive new asset class in society today.",
    },
    {
      question: "What cryptocurrencies can I earn on WorkLoob?",
      answer:
        "Freelancers and customers can organize cryptocurrency job payments in BASE and stablecoins.",
    },
    {
      question: "How does a WorkLoob Premium membership benefit Freelancers?",
      answer:
        "Freelancers are charged 5% in platform fees for each Job or Gig they complete. These fees are converted to LOB tokens on the open market. Freelancers may then receive a rebate of up to half of this amount in LOB tokens, depending on their Premium membership status. This potentially reduces their fees to as little as 1%.",
    },
    {
      question: "How does a WorkLoob Premium membership benefit Customers?",
      answer:
        "Customers receive a bonus in LOB tokens every time they make a payment to a Freelancer. This acts as an incentive for Customers to continue using WorkLoob for all their hiring needs. The LOB they receive can be held, accruing value over time, or alternatively can be used to pay Freelancers.",
    },
    {
      question: "Can I apply for jobs without a Premium membership?",
      answer:
        "Absolutely! WorkLoob job market is open to all. However, with even the lowest level of Premium membership, Freelancers will start to earn LOB tokens and No fees charged after any gig or offer completion, allowing them to access higher levels and earn larger rebates – a virtuous cycle.",
    },
    {
      question: "What is ‘Job Mining’?",
      answer:
        "Whenever a task is completed and a job payment is made, WorkLoob converts its fee into LOB. These LOB tokens are distributed between Freelancers, Customers, and other Lob stakeholders who participate in Staking. This process is called Job Mining.",
    },
    {
      question: "What Types of Jobs Can I Find Here?",
      answer:
        "This platform welcomes opportunities from all walks of life. Whether you're offering or seeking services, there’s a place for everyone. From technical roles like development and design to creative, administrative, and skilled trades, both customers and talents can connect for work that matches their needs and skills. No matter the profession or service, there's room for you here.",
    },
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container section-title">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="container">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleItem(index)} // Toggle active index
          >
            <div
              className="faq-question d-flex align-items-center"
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h4>{item.question}</h4>
              <i
                className={`bi ${
                  activeIndex === index ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              ></i>
            </div>
            <div className="faq-answer mt-3">
              {activeIndex === index && <p>{item.answer}</p>}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
