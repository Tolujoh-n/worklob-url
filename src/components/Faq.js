import React from "react";

const Faq = () => {
  const faqItems = [
    {
      question: "What are the benefits of freelancing for crypto?",
      answer:
        "Because cryptocurrency is borderless and global, anyone can apply for a job and get paid, no matter where our Freelancers and Customers are in the world, and regardless of whether they have access to banking services. Crypto job payments are efficient, and blockchain technology enables a truly free and frictionless labour market. Freelancing is also a good way to earn crypto, an attractive new asset class in society today.",
      delay: 100,
    },
    {
      question: "What cryptocurrencies can I earn on WorkLob?",
      answer:
        "Freelancers and customers can organize cryptocurrency job payments in BASE and stablecoins.",
      delay: 200,
    },
    {
      question: "How does a WorkLob Premium membership benefit Freelancers?",
      answer:
        "Freelancers are charged 10% in platform fees for each Job or Gig they complete. These fees are converted to LOB tokens on the open market. Freelancers may then receive a rebate of up to half of this amount in LOB tokens, depending on their Premium membership status. This potentially reduces their fees to as little as 5%, as well as giving them a regular payment in a token for which there is constant demand – somewhat akin to a ‘crypto jobs pension’.",
      delay: 300,
    },
    {
      question: "How does a WorkLob Premium membership benefit Customers?",
      answer:
        "Customers receive a bonus in LOB tokens every time they make a payment to a Freelancer. This acts as an incentive for Customers to continue using WorkLob for all their hiring needs. The LOB they receive can be held, accruing value over time, or alternatively can be used to pay Freelancers.",
      delay: 400,
    },
    {
      question: "Can I apply for jobs without a Premium membership?",
      answer:
        "Absolutely! WorkLob job market is open to all. However, with even the lowest level of Premium membership, Freelancers will start to earn LOB tokens and No fees charged after any gig or offer completion, allowing them to access higher levels and earn larger rebates – a virtuous cycle.",
      delay: 500,
    },
    {
      question: "What is ‘Job Mining’?",
      answer:
        "Whenever a task is completed and a job payment is made, WorkLob converts its fee into LOB. These LOB tokens are distributed between Freelancers, Customers, and other Lob stakeholders who participate in Staking. This process is called Job Mining.",
      delay: 500,
    },
    {
      question: "What Types of Jobs Can I Find Here?",
      answer:
        "This platform welcomes opportunities from all walks of life. Whether you're offering or seeking services, there’s a place for everyone. From technical roles like development and design to creative, administrative, and skilled trades, both customers and talents can connect for work that matches their needs and skills. No matter the profession or service, there's room for you here.",
      delay: 500,
    },
  ];

  return (
    <section id="faq" className="faq section">
      <div className="container section-title">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="container">
        {faqItems.map((item, index) => (
          <div className="row faq-item" key={index}>
            <div className="col-lg-5 d-flex">
              <i className="bi bi-question-circle"></i>
              <h4>{item.question}</h4>
            </div>
            <div className="col-lg-7">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
