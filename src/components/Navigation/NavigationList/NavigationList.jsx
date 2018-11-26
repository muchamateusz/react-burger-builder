// LIBS
import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

// APP
import NavigationItem from './NavigationItem/NavigationItem';

// MODULE
import './NavigationList.less';

const NavigationList = ({ className, hide, ...rest }) => (
  <ul className={classNames("navigation-list", className)}>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/checkout">Checkout</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>
);

NavigationList.propTypes = {
  className: PropTypes.string,
};

export default NavigationList;
