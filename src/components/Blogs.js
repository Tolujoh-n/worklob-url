import React from "react";
import aboutImage from "../assets/img/about.jpg"; // Uncomment and update the path if needed

const Blogs = () => {
  return (
    <section id="recent-blog-posts" className="recent-blog-posts section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Recent Blog Posts</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-5">
          {/* Post Item 1 */}
          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">
              <div className="post-img position-relative overflow-hidden">
                <img src={aboutImage} className="img-fluid" alt="" />
                <span className="post-date">December 12</span>
              </div>

              <div className="post-content d-flex flex-column">
                <h3 className="post-title">
                  Bridging Talent and Opportunity for Every Profession
                </h3>

                <div className="meta d-flex align-items-center">
                  <p id="blogpara">
                    Explore how our platform connects job seekers and creators,
                    offering roles across industries for a diverse range of
                    skills and talen...
                  </p>
                </div>

                <hr />

                <a href="blog-details.html" className="readmore stretched-link">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* End Post Item 1 */}

          {/* Post Item 2 */}
          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">
              <div className="post-img position-relative overflow-hidden">
                <img src={aboutImage} className="img-fluid" alt="" />
                <span className="post-date">July 17</span>
              </div>

              <div className="post-content d-flex flex-column">
                <h3 className="post-title">
                  The Future of Work: Flexibility and Freedom
                </h3>

                <div className="meta d-flex align-items-center">
                  <p id="blogpara">
                    Learn how freelancing, part-time, and full-time
                    opportunities redefine the modern workforce, empowering
                    professionals and businesses alik...
                  </p>
                </div>

                <hr />

                <a href="blog-details.html" className="readmore stretched-link">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* End Post Item 2 */}

          {/* Post Item 3 */}
          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">
              <div className="post-img position-relative overflow-hidden">
                <img src={aboutImage} className="img-fluid" alt="" />
                <span className="post-date">September 05</span>
              </div>

              <div className="post-content d-flex flex-column">
                <h3 className="post-title">
                  Why Every Job Matters: A Platform for All
                </h3>

                <div className="meta d-flex align-items-center">
                  <p id="blogpara">
                    Discover how we celebrate all professions, connecting
                    customers and talents to create opportunities that make a
                    difference in every fiel...
                  </p>
                </div>

                <hr />

                <a href="blog-details.html" className="readmore stretched-link">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* End Post Item 3 */}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
