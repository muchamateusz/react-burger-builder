// LIBS
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// MODULE
import "./DarkOverlay.less";
const DarkOverlay = ({ show, clicked, className, ...rest }) =>
  show && (
    <div onClick={clicked} className={classNames("dark-overlay", className)} />
  );

DarkOverlay.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
  className: PropTypes.string
};

export default DarkOverlay;
