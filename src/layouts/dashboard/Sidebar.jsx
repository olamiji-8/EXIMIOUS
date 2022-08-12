import React from "react";
import { Link } from "react-router-dom";

import { SideBarDataOne } from "../../data/Dropdown/data";
import { SideBarDataTwo } from "../../data/Dropdown/data";
import '../../styles/layout/sidebar.scss';


const DashboardSideBar = () => {
  return (
    <section className="dropdown-container">
      {SideBarDataOne.map((item) => {
        const { id, name, link, icon } = item;
        return (
          <Link to={link} key={id}>
            <span className="dropdown-container-contain">
              <div className="dropdown-container-icon">
                <img src={icon} alt="icon" />
              </div>
              <div className="dropdown-container-name">
                <h4>{name}</h4>
              </div>
            </span>
          </Link>
        );
      })}
      <br />
      <hr />
      {SideBarDataTwo.map((item) => {
        const { id, name, link, icon } = item;
        return (
          <Link to={link} key={id}>
            <span className="dropdown-container-contain">
              <div className="dropdown-container-icon">
                <img src={icon} alt="icon" />
              </div>
              <div className="dropdown-container-name">
                <h4>{name}</h4>
              </div>
            </span>
          </Link>
        );
      })}
      <br />
      <hr />
      <a href="/">
        <img
          className="dropdown-container-google-play-store"
          src="./sidebar-icons/google-play-store.png"
          alt="play-store"
        />
      </a>
    </section>
  );
};

export default DashboardSideBar;
