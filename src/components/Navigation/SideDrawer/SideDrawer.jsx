// LIBS
import React from "react";
import classNames from "classnames";

// APP
import NavigationList from "../NavigationList/NavigationList";
import Logo from "../../../common-components/Logo/Logo";
import DarkOverlay from "../../../common-components/DarkOverlay/DarkOverlay";

// MODULE
import "./SideDrawer.less";

const SideDrawer = ({ open, closed, ...rest }) => {
  return (
    <React.Fragment>
      <DarkOverlay show={open} clicked={closed} />
      <div
        className={classNames(
          "side-drawer",
          { "side-drawer--open": open },
          { "side-drawer--close": !open }
        )}
      >
        <Logo className="side-drawer__logo" />
        <NavigationList />
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
