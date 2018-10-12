// LIBS
import React from "react";
import classNames from 'classnames';

// APP
import logoImg from "../../assets/burgerlogo.png";

// MODULE
import "./Logo.less";

const Logo = ({ height, className, ...rest }) => (
  <div className={classNames("logo", className)} style={{ height }}>
    <img src={logoImg} alt="logo" />
  </div>
);

export default Logo;
