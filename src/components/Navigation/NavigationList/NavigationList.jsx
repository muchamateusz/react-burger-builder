// LIBS
import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

// APP
import NavigationItem from './NavigationItem/NavigationItem';

// MODULE
import './NavigationList.less';

const NavigationList = ({ className, ...rest }) => (
  <ul className={classNames("navigation-list", className)}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

NavigationList.propTypes = {
  className: PropTypes.string,
};

export default NavigationList;
