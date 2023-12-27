import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Welcome to Filmora, your go-to free movie app compatible with virtually any media device. 
                    Whether you own a smartphone, tablet, or computer, Filmora is designed to seamlessly enhance your entertainment experience. 
                    Explore a diverse world of content, including free movies, TV shows, web series, news, and podcasts.
                    Discover our extensive catalog of free movies thoughtfully organized into categories by genre, 
                    ranging from thrilling horror to heartwarming romance and side-splitting comedy. 
                    Dive into our featured and most popular movie selections for a curated viewing experience.Immerse yourself in 
                    high-quality movies, and enjoy a smooth playback experience with our user-friendly movie player.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    <span className="icon">
                        <a href="https://github.com/Vaibhav25O/Filmora.git" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;