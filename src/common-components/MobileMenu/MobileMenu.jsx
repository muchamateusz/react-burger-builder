// LIBS
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// MODULE
import './MobileMenu.less';

const MobileMenu = ({ toggleMenu, menuOpened, ...rest }) => {
  return (
    <div className="mobile-menu" onClick={toggleMenu}>
      <div
        className={classNames("mobile-menu__icon", {
          "mobile-menu__icon--opened": menuOpened
        })}
      >
        <div className="mobile-menu__icon__bar" />
        <div className="mobile-menu__icon__bar" />
        <div className="mobile-menu__icon__bar" />
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  menuOpened: PropTypes.bool,
  toggleMenu: PropTypes.func
};

export default MobileMenu;
