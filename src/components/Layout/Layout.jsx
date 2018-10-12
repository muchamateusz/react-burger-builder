// LIB
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Toolbar from "../Navigation/Toolbar/Toolbar";

// APP
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

// MODULE
import "./Layout.less";

class Layout extends PureComponent {
  state = {
    showDarkOverlay: false
  };

  updateDarkOverlayStateHandler = () => {
    this.setState(prevState => {
      return { showDarkOverlay: !prevState.showDarkOverlay };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar
          toggleMenu={this.updateDarkOverlayStateHandler}
          menuOpened={this.state.showDarkOverlay}
        />
        <SideDrawer
          toggleMenu={this.updateDarkOverlayStateHandler}
          menuOpened={this.state.showDarkOverlay}
        />
        <main>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any
};
export default Layout;
