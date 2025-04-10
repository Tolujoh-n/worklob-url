import React from "react";
import memeimg from "../assets/img/ai-agents/crypto-meme-generator.png";
import pitchimg from "../assets/img/ai-agents/pitch-polisher.png";
import codeimg from "../assets/img/ai-agents/smart-contract-auditor.png";

const AIagent = () => {
  const aifeature = [
    {
      id: 1,
      title: "Crypto Meme Maker",
      description: "Generate fun, on-trend crypto memes from text prompts.",
      image: memeimg,
    },
    {
      id: 2,
      title: "Pitch Polisher",
      description:
        "Elevate your project pitch or whitepaper with professional polish.",
      image: pitchimg,
    },
    {
      id: 3,
      title: "Smart Contract Auditor",
      description: "Uncover potential issues in your Solidity contracts.",
      image: codeimg,
    },
  ];

  return (
    <section id="recent-blog-posts" className="recent-blog-posts section">
      {/* Section Title */}

      <h2 className="aiagenthead">AI Agents</h2>

      {/* End Section Title */}

      <div className="container">
        <div className="row gy-5">
          {aifeature.map((post) => (
            <div className="col-xl-4 col-md-6" key={post.id}>
              <div className="post-item position-relative h-100">
                <div className="post-img position-relative overflow-hidden">
                  <img
                    src={post.image}
                    className="img-fluid"
                    alt={post.title}
                  />
                </div>

                <div className="post-content d-flex flex-column">
                  <h3 className="post-title">{post.title}</h3>

                  <div className="meta d-flex align-items-center">
                    <p id="blogpara">{post.description}</p>
                  </div>

                  <hr />

                  <a href="/" className="readmore stretched-link">
                    <span>View Details</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <div className="text-center">
          <button className="use-button">View All AI Agents</button>
        </div>
      </div>
    </section>
  );
};

export default AIagent;
