import PropTypes from "prop-types";
import "./HomeDashboard.scss";
import SocialLinks from "../SocialLinks/SocialLinks";
import { Link as ScrollLink } from "react-scroll";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Media from "../../Global/Media";
import { motion } from "framer-motion";

const Hero = ({ data, socialData, animated }) => {
  const { description, imgLink, title, bgImgLink } = data;
  const transition = { duration: 2, type: "spring" };

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector(".st-hero-wrap .st-hero-img");
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.1}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="st-hero-wrap">
      <div className="st-height-b80 st-height-lg-b80">
        <div
          className="st-hero st-style1 st-bg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + bgImgLink})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="st-hero-text">
                  <p style={{ color: "grey", fontSize: "14px" }}>
                    <span
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="200"
                      className="title"
                    >
                      Hi There
                    </span>
                  </p>
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="mb-1x"
                    data-aos-delay="300"
                    style={{
                      display: "flex",
                      fontWeight: "bold",
                      fontSize: 30,
                      color: "#fff",
                    }}
                  >
                    I'm {title}
                  </h2>
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    style={{
                      display: "flex",
                      fontWeight: "bold",
                      fontSize: 30,
                      color: "#629419",
                    }}
                    className="fluidz-48 mb-1x"
                  >
                    <Typewriter
                      options={{
                        strings: [
                          animated.first,
                          animated.second,
                          animated.third,
                          animated.fourth,
                          animated.fifth,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h2>
                  <p
                    className="mb-1x"
                    style={{
                      display: "flex",
                      color: "#fff",
                    }}
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                  >
                    {description}
                  </p>
                  <div
                    className="st-hero-btn"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="500"
                  >
                    <div className="intro_btn-action pb-7">
                      <ScrollLink to="portfolio" className="text_2">
                        <div id="button_p" className="ac_btn btn ">
                          My Portfolio
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </ScrollLink>
                      <ScrollLink to="contact">
                        <div
                          id="button_h"
                          className="ac_btn btn"
                          style={{ borderWidth: 1, borderColor: "#fff" }}
                        >
                          Contact Me
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </ScrollLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="st-hero-img st-to-right" style={{}}>
                  <div className="i-right">
                    <motion.img
                      initial={{ top: "10rem", left: "50%" }}
                      whileInView={{ left: "", rotate: 360 }}
                      transition={transition}
                      src={Media.Figma}
                      style={{ width: 100, height: 100, cursor: "pointer" }} // Modify styles as needed
                      alt="Figma" // Replace with new alt text
                    />
                    <motion.img
                      initial={{ top: "10rem", left: "74%" }}
                      whileInView={{ left: "68%", rotate: 360 }}
                      transition={{ duration: 2, type: "spring" }}
                      src={Media.nodejs_image}
                      style={{ width: 150, height: 100, cursor: "pointer" }}
                      alt=""
                      className="second-image"
                    />
                    <motion.img
                      initial={{ left: "9rem", top: "30rem" }}
                      whileInView={{ left: "0rem", rotate: 360 }}
                      transition={{ duration: 2, type: "spring" }}
                      src={Media.react_image}
                      style={{ width: 150, height: 150, cursor: "pointer" }}
                      alt=""
                      className="third-image"
                    />
                    <motion.img
                      initial={{ left: "9rem", top: "40rem" }}
                      whileInView={{ left: "68%", rotate: 360 }}
                      transition={{ duration: 2, type: "spring" }}
                      src={Media.javascript}
                      style={{ width: 80, height: 80, cursor: "pointer" }}
                      alt=""
                      className="third-image"
                    />
                  </div>
                  <img
                    className=""
                    src={process.env.PUBLIC_URL + imgLink}
                    alt="Hero"
                    style={{}}
                    loading="lazy"
                  />
                  <div className="st-social-group">
                    <SocialLinks data={socialData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Hero;
