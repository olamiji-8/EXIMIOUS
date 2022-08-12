import React from "react";
import {
  UilFacebook,
  UilTwitter,
  UilLinkedin,
  UilInstagram,
  UilWhatsapp,
  UilApple,
  UilGooglePlay,
  UilCopyright,
} from "@iconscout/react-unicons";

import { Link } from "react-router-dom";

import "../styles/layout/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-flex">
          <div className="footer-blocks">
            <h4>Renager</h4>
            <div>
              <p>
                Abdulsalam Close Oladejo Street Owode, Apata, Ibadan, Oyo State
              </p>
            </div>
            <div className="footer-support">
              <p>
                Support <span>+2348148918920</span>
              </p>
            </div>
            <div className="footer-socials">
              <UilTwitter />
              <UilLinkedin />
              <UilInstagram />
              <UilFacebook />
              <UilWhatsapp />
            </div>
          </div>
          <div className="footer-blocks">
            <div>
              <Link to="/About">About Us</Link>
            </div>
            <div>
              <Link to="/FAQ">FAQs</Link>
            </div>
            <div>
              <Link to="/Services">Services</Link>
            </div>
            <div>
              <Link to="/Privacy">Privacy Policy</Link>
            </div>
            <div>
              <Link to="/Terms">Terms and conditions</Link>
            </div>
          </div>
          <div className="footer-blocks">
            <div>
              <Link to="/Buy">Buy</Link>
            </div>
            <div>
              <Link to="/Lease">Lease</Link>
            </div>
            <div>
              <Link to="/Rent">Rent</Link>
            </div>
            <div>
              <Link to="/Sell">Sell</Link>
            </div>
            <div>
              <Link to="/Due">Due diligence</Link>
            </div>
          </div>
          <div className="footer-blocks">
            <div>
              <Link to="/pricing">Pricing</Link>
            </div>
            <div>
              <Link to="/Careers">Careers</Link>
            </div>
            <div>
              <Link to="/Blog">Blog</Link>
            </div>
            <div>
              <Link to="/Press">Press</Link>
            </div>
            <div></div>
          </div>
          <div className="footer-blocks">
            <div>
              <p>Download the Renager App</p>
            </div>
            <div className="store-cards">
              <UilApple />
              <p>
                Available on the <span className="Bold-text">App Store</span>
              </p>
            </div>
            <div className="store-cards">
              <UilGooglePlay />
              <p>
                GET IT ON <span className="Bold-text">Google Play</span>
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="copyright">
          <UilCopyright />
          <p>2021 renager -All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
