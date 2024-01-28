import PropTypes from "prop-types";
import "./Skill.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import Media from "../../Config/Media";
import { useState } from "react";

const Skill = ({ data }) => {
  const { title, text } = data;
  const [skillData] = useState([
    {
      id: 1,
      image: Media.react,
      name: "React Native",
    },
    {
      id: 2,
      image: Media.react,
      name: "React JS",
    },
    {
      id: 3,
      image: Media.cashfree,
      name: "Cashfree",
    },
    {
      id: 4,
      image: Media.ccavenue,
      name: "CCAvanue",
    },
    {
      id: 5,
      image: Media.express,
      name: "Express JS",
    },
    {
      id: 6,
      image: Media.firebase,
      name: "Firebase",
    },
    {
      id: 7,
      image: Media.figma,
      name: "Figma",
    },
    {
      id: 8,
      image: Media.git,
      name: "Git",
    },
    {
      id: 9,
      image: Media.github,
      name: "Github",
    },
    {
      id: 10,
      image: Media.gitlab,
      name: "Gitlab",
    },
    {
      id: 11,
      image: Media.javascript,
      name: "JavaScript",
    },
    {
      id: 12,
      image: Media.mongoDB,
      name: "MongoDB",
    },
    {
      id: 13,
      image: Media.nestJS,
      name: "Nest JS",
    },
    {
      id: 14,
      image: Media.nodejs,
      name: "Node JS",
    },
    {
      id: 15,
      image: Media.phpmyadmin,
      name: "PhpMyAdmin",
    },
    {
      id: 16,
      image: Media.postman,
      name: "Postman",
    },
    {
      id: 17,
      image: Media.razorpay,
      name: "Razorpay",
    },
    {
      id: 18,
      image: Media.redis,
      name: "Redis",
    },
    {
      id: 19,
      image: Media.stripe,
      name: "Stripe",
    },
    {
      id: 20,
      image: Media.mysql,
      name: "MySQL",
    },
    {
      id: 21,
      image: Media.maps,
      name: "Google Maps",
    },
    {
      id: 22,
      image: Media.netlify,
      name: "Netlify",
    },
  ]);
  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Skills" />
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-6"> */}
          <div className="st-skill-wrap">
            <div
              className="st-skill-heading"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <h2 className="st-skill-title">{title}</h2>
              <div className="st-skill-subtitle">{text}</div>
            </div>
          </div>
          <div className="st-height-b100 st-height-lg-b80"></div>
          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              flexWrap: "wrap",
            }}
          >
            {skillData.map((item, index) => (
              <div
                key={index}
                className="skill-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#fefefe",
                  width: "calc(15% - 20px)", // Default to 4 cards per row
                  margin: "0 10px 20px 10px",
                  padding: 10,
                  borderRadius: 10,
                  height: "100px", // Set a fixed height for the card
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    maxWidth: "50%",
                    maxHeight: "50%",
                    overflow: "hidden",
                    borderRadius: 5,
                  }}
                >
                  <img
                    src={item?.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: 5,
                    }}
                    alt={item.name}
                  />
                </div>
                <div className="skill-title text-center mt-2" style={{}}>
                  <span
                    className="text-base text-gray-600"
                    style={{
                      backgroundColor: "#fefefe",
                      padding: "5px",
                      borderRadius: "5px",
                      display: "inline-block",
                      fontSize: 14,
                      color: "#000",
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Skill.propTypes = {
  data: PropTypes.object,
};

export default Skill;
