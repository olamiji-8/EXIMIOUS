import React from "react";
import Button from "../components/ui/Button";
import Navigation from "../layouts/Navbar";
import headerImage from "../assets/images/home/ren-2 2.png";
import stars from "../assets/svg/home/stars.svg";
import onlinePayment from "../assets/images/home/OnlinePayment.png";
import dropDown from "../assets/svg/home/drop-down.svg";
import icon from "../assets/svg/home/Group 677.svg";
import Card from "../components/ui/Card";
import DropDown from "../components/ui/Dropdown";
import { useState } from "react";
import ShadowCard from "../components/ui/ShadowCards";
import Footer from "../layouts/Footer";

const Header = () => {
  return (
    <div className="landing-page__header">
      <Navigation />
      <div className="header-section">
        <div>
          <div className="header-section__image">
            <img src={headerImage} alt="" />
          </div>
        </div>
        <div className="header-flex">
          <h1 className="header-section__title">
            Real Estate Transactions Made Easy
          </h1>
          <p className="header-section__text">
            A fully automated process to give a seamless experience.
          </p>
          <div className="header-section__searchbar">
            <input type="search" placeholder={`Ibadan, Oyo state`} />
            <Button text="Search" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
};
const Section1 = () => {
  return (
    <div className="landing-section1">
      <p>What is Renager?</p>
      <div className="landing-section1__flex">
        <div className="all-box">
          <div className="first-box">
            <p>Buy</p>
            <div className="oval"></div>
            <div className="grid">
              <div className="grid-box"></div>
              <div className="grid-box"></div>
              <div className="grid-box"></div>
              <div className="grid-box"></div>
            </div>
          </div>
          <div className="second-box">
            {[
              {
                text: "Sell",
                style: { backgroundColor: "#ffffff" },
              },
              { text: "Rent", style: { backgroundColor: "" } },
              {
                text: "Lease",
                style: {
                  backgroundColor: "#4b5ffa",
                  borderRadius: "0px 0px 10px 0px",
                  height: "12.1em",
                  position: "relative",
                  color: "#fff",
                },
              },
            ].map((item, id) => (
              <div className="" key={id}>
                <Card children={item.text} style={item.style} />
              </div>
            ))}
          </div>
        </div>
        <div className="landing-section__text">
          <h2>
            An all in one property technology system. Easier, Stress Free,
            Faster.
          </h2>
          <p>
            We are dedicated towards automating real estate transactions in
            Nigeria. Our uniqueness is in the way we provide solution for real
            estate stakeholders to market their properties for sale and lease.
            Our ultimate goal is to ensure that customers have a transparent and
            secured means to complete their transactions online.
          </p>
          <a href="/k">Read more &#8250;</a>
        </div>
      </div>
    </div>
  );
};
const Section2 = () => {
  return (
    <div className="landing-works">
      <div className="landing-work">
        <p>How it works</p>
        <div className="landing-works__tabbed__buttons">
          <div className="tabbed__button tabbed__button__active">
            I want to buy
          </div>
          <div className="tabbed__button">I want to Sell</div>
          <div className="tabbed__button">I want to Rent</div>
          <div className="tabbed__button">I want to Lease</div>
        </div>
        <div className="tabbed__contents">
          <div className="tabbed__content">
            <img src={icon} alt="" />
            <div className="tabbed__content__text">
              <h5 className="tabbed__content__title">Find a property to buy</h5>
              <p>
                View the properties listed on the platform, based on your
                preference. Or simply search based on the filters provided.
              </p>
            </div>
            <div className="numbering">01</div>
          </div>
          <div className="tabbed__content">
            <img src={icon} alt="" />
            <div className="tabbed__content__text">
              <h5 className="tabbed__content__title">Find a property to buy</h5>
              <p>
                View the properties listed on the platform, based on your
                preference. Or simply search based on the filters provided.
              </p>
            </div>
            <div className="numbering">01</div>
          </div>
          <div className="tabbed__content">
            <img src={icon} alt="" />
            <div className="tabbed__content__text">
              <h5 className="tabbed__content__title">Find a property to buy</h5>
              <p>
                View the properties listed on the platform, based on your
                preference. Or simply search based on the filters provided.
              </p>
            </div>
            <div className="numbering">01</div>
          </div>
          <div className="tabbed__content">
            <img src={icon} alt="" />
            <div className="tabbed__content__text">
              <h5 className="tabbed__content__title">Find a property to buy</h5>
              <p>
                View the properties listed on the platform, based on your
                preference. Or simply search based on the filters provided.
              </p>
            </div>
            <div className="numbering">01</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Section3 = () => {
  const [dropDetails, setDropDetails] = useState(0);
  const handleclick = function (e) {
    dropDetails === 0
      ? setDropDetails(+e.target.closest(".down-icon").dataset.no)
      : setDropDetails(0);
    console.log(e.target);
  };
  return (
    <div className="landing-why">
      <p>Why Renager</p>
      <div className="dropdowns">
        {[
          {
            id: 1,
            title: "Online",
            p: "Our payment gateway has made it easier for prospective property owners and tenants to complete all their transactions all on the platform without any form of discomfort.",
            link: onlinePayment,
          },
          {
            id: 2,
            title: "eliminte",
            p: "Our payment gateway has made it easier for prospective property owners and tenants to complete all their transactions all on the platform without any form of discomfort.",
          },
        ].map((item) => {
          return (
            <div className="dropdown" key={item.id}>
              <div
                className={
                  dropDetails === item.id
                    ? "down-icon icon-active"
                    : "down-icon"
                }
                onClick={handleclick}
                data-no={item.id}
              >
                <img src={dropDown} alt="" />
              </div>
              <div className="">
                <h2>{item.title}</h2>
                <DropDown
                  texts={[item.p]}
                  styles={
                    dropDetails === item.id
                      ? "drop-down drop-down__open"
                      : "drop-down"
                  }
                  imgLink={onlinePayment}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Section4 = () => {
  return (
    <div className="remarks">
      <p style={{ fontSize: "24px" }} className="remarks-text">
        Here's what people are saying
      </p>
      <div className="remarks__heading">
        <h1>
          “Our process involves helping you get high quality properties at your
          own comfort.”
        </h1>
        <h2>
          - Qazeem Oladejo <br /> <span>CEO</span>
        </h2>
      </div>
      <div className="cards">
        {[
          {
            id: 0,
            remark:
              "The customer service is one of a kind. I was professonally guided the whole process of getting my property leased.",
            author: "John Fadipe",
          },
          {
            id: 1,
            remark:
              "Easier way to get a property in Nigeria. A trusted platform and team to deliver",
            author: "Ambimbola Milfred ",
          },
          {
            id: 2,
            remark:
              "Easier way to get a property in Nigeria. A trusted platform and team to deliver",
            author: "Debola Arojojoye",
          },
        ].map((item) => {
          const remark = <p className="remark">{item.remark}</p>;
          const author = (
            <div className="author">
              <div className="authorimage">
                <img src="" alt="" />
              </div>
              <div className="">
                <p style={{ marginBottom: "15px" }}>{item.author}</p>
                <img src={stars} alt="" />
              </div>
            </div>
          );

          return (
            <ShadowCard
              key={item.id}
              children={{
                remark: remark,
                author: author,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="landing-page">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default Home;
