import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
// import { socialprofils as socialProfilesData } from "../../HomePageData.json";
import PropTypes from "prop-types";

const socialprofils = {
  github: "https://github.com/GokulRajprince",
  facebook: "https://www.facebook.com/profile.php?id=100027056631054",
  linkedin: "https://www.linkedin.com/in/gokul-raj-m-97008b228/",
  twitter: "https://twitter.com",
};

const Socialicons = (params) => {
  const { twitter, github, facebook, linkedin, youtube, twitch } =
    socialprofils;

  return (
    <div className="stick_follow_icon">
      <ul>
        {twitter && (
          <li>
            <a href={twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {github && (
          <li>
            <a href={github}>
              <FaGithub />
            </a>
          </li>
        )}
        {facebook && (
          <li>
            <a href={facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <a href={linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {youtube && (
          <li>
            <a href={youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {twitch && (
          <li>
            <a href={twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};

Socialicons.propTypes = {
  title: PropTypes.object,
};

export default Socialicons;
