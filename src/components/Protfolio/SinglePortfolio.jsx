import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const SinglePortfolio = ({ data, getData }) => {
  const {
    imgLink,
    imgLinkLg,
    playLink,
    title,
    subTitle,
    effect,
    duration,
    delay,
  } = data;

  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos={effect}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      <div
        className="st-portfolio-single st-style1"
        onClick={() => getData(imgLinkLg, title, subTitle)}
      >
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img
                src={imgLink}
                alt="portfolio"
                style={{
                  width: "370px",
                  height: "300px",
                  // objectFit: "cover",
                  borderRadius: 10,
                  backgroundColor: "#fefefe",
                }}
              />
            </div>
            <div className="st-portfolio-item-hover">
              <div className="icon-row">
                <Icon icon="mdi:plus-circle" />
                <div onClick={() => window.open(playLink, "_blank")}>
                  <Icon icon="material-symbols:link" />
                </div>
              </div>
              <h5>{title}</h5>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePortfolio.propTypes = {
  data: PropTypes.object,
};

export default SinglePortfolio;
