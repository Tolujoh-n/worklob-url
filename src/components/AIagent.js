import React from "react";
import aboutImage from "../assets/img/about.jpg"; // Uncomment and update the path if needed

const AIagent = () => {
  const aifeature = [
    {
      id: 1,
      title: "Bridging Talent and Opportunity for Every Profession",
      description:
        "Explore how our platform connects job seekers and creators, offering roles across industries for a diverse range of skills and talent.",
      image: aboutImage,
      link: "blog-details.html",
    },
    {
      id: 2,
      title: "The Future of Work: Flexibility and Freedom",
      description:
        "Learn how freelancing, part-time, and full-time opportunities redefine the modern workforce, empowering professionals and businesses alike.",
      image: aboutImage,
      link: "blog-details.html",
    },
    {
      id: 3,
      title: "Why Every Job Matters: A Platform for All",
      description:
        "Discover how we celebrate all professions, connecting customers and talents to create opportunities that make a difference in every field.",
      image: aboutImage,
      link: "blog-details.html",
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

                  <a href={post.link} className="readmore stretched-link">
                    <span>Read More</span>
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
