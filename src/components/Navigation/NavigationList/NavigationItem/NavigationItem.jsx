// LIBS
import React from "react";
import PropTypes from "prop-types";

// MODULE
import './NavigationItem.less';

const NavigationItem = ({ link, active, children, ...rest }) => (
    <li className="navigation-item">
      <a href={link} className={active && 'navigation-item--active'} >{children}</a>
    </li>
);

NavigationItem.propTypes = {
  link: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.any,
};

export default NavigationItem;
