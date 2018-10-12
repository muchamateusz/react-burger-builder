// LIBS
import React from "react";
import PropTypes from "prop-types";

// MODULE
import './DarkOverlay.less';
const DarkOverlay = ({ show, clicked, ...rest }) =>
  show && <div onClick={clicked} className="dark-overlay" />;

DarkOverlay.propTypes = {
  defaultProp: PropTypes.string
};

export default DarkOverlay;
