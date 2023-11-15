import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/013/923/542/small_2x/red-vehicle-car-logo-png.png"
            alt="Car Dealer"
            style={{ width: "100%" }}
          />
        </div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#trending">Trending</a>
          <a href="#reviews">Reviews</a>
        </div>
        <div className="footer-social">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Car Dealer. All rights reserved.</p>
        <p>Owner Pedro de Lucca</p>
      </div>
    </footer>
  );
};

export default Footer;
