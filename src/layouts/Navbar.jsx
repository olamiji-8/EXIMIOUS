import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import bell from "../assets/svg/home/bell 1.svg";
import dropDown from "../assets/svg/home/drop-down.svg";
import { Link, useLocation } from "react-router-dom";

import Button from "../components/ui/Button";
const DropNotification = ({ texts, styles }) => {
  return (
    <div className={styles} color="#333">
      {texts.map((text, id) => (
        <div className="notification-text" key={id}>
          <Link to="/">{text}</Link>
        </div>
      ))}
    </div>
  );
};

const Navigation = () => {
  const location = useLocation();

  const [viewNotification, setViewNotification] = useState(false);
  const [viewProfile, setViewProfile] = useState(true);
  const [signedIn, setSignedIn] = useState(true);

  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = function (e) {
    e.target.closest(
      ".menu"
    ).previousElementSibling.dataset.visible = `${openMenu}`;
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="navigation-bar">
      <div className="inner-navigation-bar" data-visible={openMenu}>
        <Link className="navigation-logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        {!(location.pathname === "/service-provider") ? (
          <div className="">
            <ul>
              <li>Buy</li>
              <li>Lease</li>
              <li>Rent</li>
              <li>Sell</li>
              <li>Services</li>
              <li>FAQs</li>
              {signedIn ? (
                <li className="navigation-account">Account</li>
              ) : (
                <li className="navigation-sign_in">Sign-in</li>
              )}
            </ul>
          </div>
        ) : (
          location.pathname
        )}
        {signedIn ? (
          <div className="profile">
            {location.pathname === "/service-provider" ? (
              <Button text="Become a Service Provider" link="/" />
            ) : (
              location.pathname
            )}
            <div
              className="notification-bell"
              onClick={() => setViewNotification((prev) => !prev)}
            >
              <img src={bell} alt="" />

              <DropNotification
                texts={[
                  "Your profile verification was really successful",
                  "New features have been added on Renager",
                  "View all notifications",
                ]}
                styles={
                  viewNotification ? "drop-down drop-down__open" : "drop-down"
                }
              />
            </div>
            <div className="navigation-user__image">
              <img src="" alt="" />
            </div>
            <p className="navigation-username">Oladele Titilayo</p>
            <div
              className="notification-drop__icon"
              onClick={() => setViewProfile((prev) => !prev)}
            >
              <img src={dropDown} alt="" />

              <DropNotification
                texts={[
                  "Profile ",
                  "Dashboard",
                  "Saved Property",
                  "Property Documents",
                  "Referrals",
                  "Sign out",
                ]}
                styles={viewProfile ? "drop-down drop-down__open" : "drop-down"}
              />
            </div>
          </div>
        ) : (
          signedIn
        )}
      </div>
      <div
        className={openMenu ? "menu menu-open" : "menu"}
        onClick={handleClick}
      >
        <div className="first"></div>
        <div className="middle"></div>
        <div className="last"></div>
      </div>
      <Link className="mobile-navigation-logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Navigation;
