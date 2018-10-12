// LIBS
import React from "react";
import classNames from "classnames";

// APP
import NavigationList from "../NavigationList/NavigationList";
import Logo from "../../../common-components/Logo/Logo";
import DarkOverlay from "../../../common-components/DarkOverlay/DarkOverlay";

// MODULE
import "./SideDrawer.less";

const SideDrawer = ({ menuOpened, toggleMenu, ...rest }) => {
  return (
    <React.Fragment>
      <DarkOverlay
        className="side-drawer__dark-overlay"
        show={menuOpened}
        clicked={toggleMenu}
      />
      <div
        className={classNames(
          "side-drawer",
          { "side-drawer--open": menuOpened },
          { "side-drawer--close": !menuOpened }
        )}
      >
        <Logo className="side-drawer__logo" />
        <NavigationList />
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
