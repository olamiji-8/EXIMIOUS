import React from "react";

import { FaBars } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";

import RentCard from "./RentCard";

const RentShowGrid = () => {
  return (
    <div>
      <div className="sorting__container">
        <h5 className="sortByClassified">
          Sort by
          <select name="sort" id="sort">
            <option defaultValue="Price">Price</option>
            <option value="Type">Type</option>
            <option value="Location">Location</option>
          </select>
        </h5>
        <div className="sort__layout">
          <div className="sort__layout__item">
            <h4>
              <FiBarChart />
            </h4>
            <h4>
              <FaBars />
            </h4>
          </div>
        </div>
      </div>

      <div className="Rent__Card__Container__Grid">
        <div className="Rent__Card__Container_Box">
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
        </div>
        <div className="Rent__Card__Container_Box">
          <h1>MAP</h1>
        </div>
      </div>
    </div>
  );
};

export default RentShowGrid;
