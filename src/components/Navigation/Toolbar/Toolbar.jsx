import React from "react";
import PropTypes from "prop-types";

import Logo from "../../../common-components/Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";

import "./Toolbar.less";

const Toolbar = props => (
  <div className="toolbar">
    <div>MENU</div>
      <Logo className="toolbar__logo" />
      <NavigationList className="toolbar__navigation" />
  </div>
);

Toolbar.propTypes = {
  defaultProp: PropTypes.string
};

export default Toolbar;
