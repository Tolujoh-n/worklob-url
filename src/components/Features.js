import React from "react";
import features1 from "../assets/img/loanimg.png";
import features2 from "../assets/img/loanimg.png";
import features3 from "../assets/img/loanimg.png";
import features4 from "../assets/img/loanimg.png";

const features = [
  {
    id: 1,
    title:
      "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    list: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullam est qui quos consequatur eos accusamus.",
    ],
    image: features1,
    delay: 100,
  },
  {
    id: 2,
    title: "Corporis temporibus maiores provident",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    additionalDescription:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: features2,
    delay: 200,
    reverse: true,
  },
  {
    id: 3,
    title:
      "Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas",
    description:
      "Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.",
    list: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.",
    ],
    image: features3,
  },
  {
    id: 4,
    title:
      "Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    additionalDescription:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: features4,
    reverse: true,
  },
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
