// LIBS
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// APP
import logoImg from "../../../assets/burgerlogo.png";

// MODULE
import "./Logo.less";

const Logo = ({ height, className, ...rest }) => (
  <div className={classNames("logo", className)} style={{ height }}>
    <img src={logoImg} alt="logo" />
  </div>
);

Logo.propTypes = {
  height: PropTypes.string,
  className: PropTypes.string
};
export default Logo;
