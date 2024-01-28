import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
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
                <span style={{ color: "#629419" }}>My Expertise</span>
              </div>
              <span>Services</span>
              <p style={{ fontSize: 14 }}>
                Elevate your brand with my expertise in innovative design and
                development solutions. I am passionate about bringing ideas to
                life through creative and impactful means. Specializing in web
                design and development, graphic design, app development,
                branding, e-commerce solutions, digital marketing, and UI/UX
                design, I offer a comprehensive suite of services tailored to
                enhance your online presence and market visibility. From
                crafting visually stunning websites to developing user-friendly
                mobile applications and implementing effective digital marketing
                strategies, I am dedicated to ensuring your brand stands out and
                succeeds in the competitive digital landscape. Let's collaborate
                to turn your concepts into compelling and memorable digital
                experiences. Your success is my priority.
              </p>
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
