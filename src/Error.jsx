import React from "react";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="Error__Container">
        <h3 className="Error__Container--Title">ErrorPage</h3>
        <p className="Error__Container--Description">You Seems Lost</p>
        <Link to="/">Go Home</Link>
      </div>
    </>
  );
};

export default ErrorPage;
