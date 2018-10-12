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
  defaultProp: PropTypes.string,
};

export default NavigationItem;
