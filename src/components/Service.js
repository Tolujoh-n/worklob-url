import React from "react";
import services1 from "../assets/img/about.jpg";
import services2 from "../assets/img/about.jpg";
import services3 from "../assets/img/about.jpg";
import services4 from "../assets/img/about.jpg";
import services5 from "../assets/img/about.jpg";
import services6 from "../assets/img/about.jpg";

const services = [
  {
    id: 1,
    title: "Nesciunt Mete",
    description:
      "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.",
    icon: "bi bi-activity",
    image: services1,
    link: "service-details.html",
    delay: 200,
  },
  {
    id: 2,
    title: "Eosle Commodi",
    description:
      "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
    icon: "bi bi-broadcast",
    image: services2,
    link: "service-details.html",
    delay: 300,
  },
  {
    id: 3,
    title: "Ledo Markt",
    description:
      "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    icon: "bi bi-easel",
    image: services3,
    link: "service-details.html",
    delay: 400,
  },
  {
    id: 4,
    title: "Asperiores Commodit",
    description:
      "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    icon: "bi bi-bounding-box-circles",
    image: services4,
    link: "service-details.html",
    delay: 500,
  },
  {
    id: 5,
    title: "Velit Doloremque",
    description:
      "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
    icon: "bi bi-calendar4-week",
    image: services5,
    link: "service-details.html",
    delay: 600,
  },
  {
    id: 6,
    title: "Dolori Architecto",
    description:
      "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
    icon: "bi bi-chat-square-text",
    image: services6,
    link: "service-details.html",
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
                  <a href={service.link} className="stretched-link">
                    <h3>{service.title}</h3>
                  </a>
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
