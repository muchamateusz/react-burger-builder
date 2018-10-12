// Lib
import React, { Component } from "react";
import PropTypes from "prop-types";
import Toolbar from "../Navigation/Toolbar/Toolbar";

// App
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

// Local
import "./Layout.less";

const propTypes = {
  children: PropTypes.any
};

class Layout extends Component {
  state = {
    showDarkOverlay: true
  };

  TurnOffDarkOverlayHandler = () => {
    this.setState(prevState => {
      return { showDarkOverlay: !prevState.showDarkOverlay };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <SideDrawer
          closed={this.TurnOffDarkOverlayHandler}
          open={this.state.showDarkOverlay}
        />
        <main>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

Layout.propTypes = propTypes;
export default Layout;
