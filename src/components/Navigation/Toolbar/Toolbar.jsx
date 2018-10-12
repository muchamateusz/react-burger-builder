// LIBS
import React from "react";
import PropTypes from "prop-types";

// APP
import Logo from "../../../common/components/Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";
import MobileMenu from "../../../common/components/MobileMenu/MobileMenu";

// MODULE
import "./Toolbar.less";

const Toolbar = ({ toggleMenu, menuOpened, ...rest }) => (
  <div className="toolbar">
    <Logo className="toolbar__logo" />
    <MobileMenu toggleMenu={toggleMenu} menuOpened={menuOpened} />
    <NavigationList className="toolbar__navigation" />
  </div>
);

Toolbar.propTypes = {
  toggleMenu: PropTypes.func,
  menuOpened: PropTypes.bool
};

export default Toolbar;
