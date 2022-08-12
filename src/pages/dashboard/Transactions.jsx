import React from "react";
import DashboardSideBar from "../../layouts/dashboard/Sidebar";
import NavbarLogo from "../../layouts/NavbarLogo";
import "../../styles/pages/transactions.scss";
// import Vector from '../../assets/svg/Vector.svg';

const Transactions = () => {
  return (
    <div className="transaction-container">
      <div>
        <NavbarLogo />
        <DashboardSideBar />
      </div>
      <div className="back-container">
        <div className="back">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="back-svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.87352 -9.73123e-08L7 1.1507L2.25296 6L7 10.8493L5.87352 12L0.684801 6.69953C0.304301 6.3108 0.304301 5.68919 0.684801 5.30046L5.87352 -9.73123e-08Z"
              fill="#4B5FFA"
            />
          </svg>
          <div className="back-text">Back</div>
        </div>
        <div className="transaction-title">Transactions</div>
        <div className="trans-subtitle">
        <div className="transaction-options" style={{width: "407px"}}>Details</div>
        <div className="transaction-options" style={{width: "150px"}}>Type</div>
        <div className="transaction-options" style={{width: "161px"}}>Status</div>
        <div className="transaction-options">Amount</div>
        </div>
        <>
          <div className="transaction-list">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="#C4C4C4" />
            </svg>
            <div className="trans-text">
              Payment for Private 4 Bedroom Apartment with shoes and slippers
              <div className="trans-date">12/02/2021</div>
            </div>
            <div className="buy">Buy</div>
          </div>
          <hr/>
        </>
      </div>
    </div>
  );
};

export default Transactions;
