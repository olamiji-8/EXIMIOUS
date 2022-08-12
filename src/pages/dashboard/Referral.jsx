import React from "react";
import DashboardSideBar from "../../layouts/dashboard/Sidebar";
import NavbarLogo from "../../layouts/NavbarLogo";
import Side from "../../../src/assets/dashboard_img/undraw_referral_4ki4 1referalillustration.png";
import "../../styles/pages/referral.scss";

const Referral = () => {
  return (
    <div className="referral-container">
      <div>
        <NavbarLogo />
        <DashboardSideBar />
      </div>
      <div className="referral-wrapper">
        <div className="referral-title">Referrals</div>
        <div className="referralDiv">
          <div className="referral-text">
            Refer People on Renager, and earn a commission once the transaction
            is completed
          </div>
          <img className="referral-img" src={Side} alt="" />
        </div>
        <div>
          <div className="referral-code">Share your Referral Code</div>
          <div>
            <input
              type="text"
              placeholder="2xUwjsoi0DGSHWKAMSB"
              className="referral-input"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="referral-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
                stroke="#455980"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
                stroke="#455980"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="share">
          <div>Share to</div>
        </div>
        <div className="referral-links">
          <a href="#" className="link">
            <ion-icon
              name="logo-whatsapp"
              style={{ color: "green" }}
            ></ion-icon>
          </a>
          <a href="https://facebook" className="link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="https://instagram" className="link">
            <ion-icon
              name="logo-instagram"
              style={{ background: "#C2DCFF" }}
            ></ion-icon>
          </a>
          <a href="https://twitter" className="link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
        <div className="total-container">
          <div className="first-total">
            <div className="total-text">Total Referrals</div>
            <div className="total-card">20 Referrals</div>
          </div>
          <div className="second-total">
            <div className="total-text">Total Amount Made from Referrals</div>
            <div className="total-card">20,000,000,000 Total</div>
          </div>
        </div>
      </div>
      <div className="history">
        <div className="history-title">Referral History</div>
        <div className="historyDiv">
          <div className="history-text">
            A New User registered through your referral link
          </div>
          <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
          <div className="history-text">You have earned N30,000 through your referral</div>
          <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
        <div className="history-text">
          A New User registered through your referral link
        </div>
        <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
        <div className="history-text">
          A New User registered through your referral link
        </div>
        <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
          <div className="history-text">You have earned N30,000 through your referral</div>
          <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
        <div className="history-text">
          A New User registered through your referral link
        </div>
        <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
        <div className="history-text">
          A New User registered through your referral link
        </div>
        <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
          <div className="history-text">You have earned N30,000 through your referral</div>
          <div className="history-date">12/02/2021</div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
