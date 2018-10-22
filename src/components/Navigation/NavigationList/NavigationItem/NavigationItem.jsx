// LIBS
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


// MODULE
import "./NavigationItem.less";

const NavigationItem = ({ link, active, children, ...rest }) => {
  return (
    <li className="navigation-item">
      <NavLink to={link} activeClassName={active && "navigation-item--active"}>
        {children}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.any
};

export default NavigationItem;
