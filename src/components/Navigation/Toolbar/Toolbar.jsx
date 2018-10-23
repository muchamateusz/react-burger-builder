// LIBS
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// APP
import Logo from "common-components/Logo/Logo";
import MobileMenu from "common-components/MobileMenu/MobileMenu";
import { URLS_TO_HEADERS } from "common-enums/enums";

// MODULE
import "./Toolbar.less";

const Toolbar = ({
  toggleMenu,
  menuOpened,
  linkChildren,
  history,
  ...rest
}) => {
  return (
    <div className="toolbar">
      <div className="navigation-item--active">
        {URLS_TO_HEADERS[history.location.pathname]}
      </div>
      <Logo className="toolbar__logo" />
      <MobileMenu toggleMenu={toggleMenu} menuOpened={menuOpened} />
    </div>
  );
};

Toolbar.propTypes = {
  toggleMenu: PropTypes.func,
  menuOpened: PropTypes.bool
};

export default withRouter(Toolbar);
