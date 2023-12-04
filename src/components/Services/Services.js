import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";
import Card from "../Card/Card";
import Media from "../../Global/Media";

const Services = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <div className="container">
        <div className="row">
          <div className="left-section">
            <div className="awesome">
              <div className="awesome-heading">
                <span style={{ color: "#fec544" }}>My Awesome</span>
              </div>
              <span>Services</span>
              <p style={{ fontSize: 14 }}>
                Elevate your brand with innovative design and development
                solutions. I bring your ideas to life with passion and
                creativity.
              </p>
              <div className="awesome-buttons">
                <a href={Resume} download>
                  <button className="button s-button">Download CV</button>
                </a>
              </div>
              <div
                className="blur s-blur1"
                style={{ background: "#ABF1FF94" }}
              ></div>
            </div>
          </div>
          <div className="right-section">
            <div className="cards">
              <motion.div
                initial={{ left: "25rem" }}
                whileInView={{ left: "14rem" }}
                transition={transition}
              >
                <Card
                  emoji={Media.ui_ux_design}
                  heading={"UI/UX Design"}
                  detail={
                    "Create stunning user interfaces with Figma, Photoshop, Adobe XD."
                  }
                />
              </motion.div>
              <motion.div
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}
              >
                <Card
                  emoji={Media.developer}
                  heading={"Mobile App Development"}
                  detail={
                    "Build cross-platform mobile applications using React Native."
                  }
                />
              </motion.div>
              <motion.div
                initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "12rem" }}
                transition={transition}
              >
                <Card
                  emoji={Media.developer}
                  heading={"Full Stack Development"}
                  detail={
                    "Develop dynamic web applications with React, Node.js, Express, HTML, CSS, and JavaScript."
                  }
                  color="rgba(252, 166, 31, 0.45)"
                />
              </motion.div>
              <div
                className="blur s-blur2"
                style={{ background: "var(--purple)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
