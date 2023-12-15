import PropTypes from 'prop-types'
import './ServicesIconbox.scss';

const ServicesIconbox = ({ data }) => {
  const { services } = data;
  return (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="row">
          {
            services.map((element, index) => (
              <div className="col-lg-4 col-md-6" key={index} data-aos={element.effect ? element.effect : "zoom-out-up"} data-aos-duration={element.duration ? element.duration : "800"} data-aos-delay={element.delay ? element.delay : "200"}>
                <div className={`st-iconbox st-style1`}>
                  <div className="st-iconbox-icon">
                    <img src={process.env.PUBLIC_URL + element.imgLink} alt="Icon" />
                  </div>
                  <h2 className="st-iconbox-title">{element.title}</h2>
                  <div className="st-iconbox-text">{element.text}</div>
                </div>
                <div className="st-height-b30 st-height-lg-b30"></div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="st-height-b70 st-height-lg-b50"></div>
    </section>
  )
}

ServicesIconbox.propTypes = {
  data: PropTypes.object
}

export default ServicesIconbox;
