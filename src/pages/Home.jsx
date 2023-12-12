import data from "../HomePageData.json";
import HomeDashboard from "../components/HomeDashboard/HomeDashboard";
import About from "../components/About/About";
import Skill from "../components/Skill/Skill";
import Resume from "../components/Resume/ResumeSection";
import Contact from "../components/Contact/Contact";
import PortfolioSection from "../components/Protfolio/PortfolioSection";
import Services from "../components/Services/Services";
import ServicesIconbox from "../components/ServicesIconbox/ServicesIconbox";

const Home = () => {
  const {
    heroData,
    aboutData,
    serviceData,
    animated,
    skillData,
    portfolioData,
    resumeData,
    contactData,
    socialData,
  } = data;
  return (
    <>
      <HomeDashboard
        data={heroData}
        animated={animated}
        socialData={socialData}
        data-aos="fade-right"
      />
      <About data={aboutData} data-aos="fade-right" />
      <Services />
      <Skill data={skillData} data-aos="fade-right" />
      <ServicesIconbox data={serviceData} data-aos="fade-right" />
      <Resume data={resumeData} />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <Contact
        data={contactData}
        socialData={socialData}
        data-aos="fade-right"
      />
    </>
  );
};

export default Home;
