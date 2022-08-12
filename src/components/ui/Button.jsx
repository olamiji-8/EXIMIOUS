import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link, styles }) => {
  return (
    <>
      <Link to={link}>
        <button className="btn" style={styles} to={link}>
          {text}
        </button>
      </Link>
    </>
  );
};

export default Button;
