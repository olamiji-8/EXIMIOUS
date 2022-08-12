import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

import LoginComoonents from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="head">
          <p>Welcome Back</p>
        </div>
        <p>
          Let's pick up where we left off yeah?. Don't have an account?{" "}
          <Link>Sign Up</Link>
        </p>
        <form action="">
          <input type="text" name="email/phone" id="" />
          <input type="password" name="password" id="" />
          <p>Forgot Password?</p>
          <Button text={Login} Link="/" />
        </form>
        <p className="or">or</p>
        <Button />
        <Button />
      </div>
    </>
  );
};

export default Login;
