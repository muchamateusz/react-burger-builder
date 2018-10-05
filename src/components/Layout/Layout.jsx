// Lib
import React from "react";
import PropTypes from "prop-types";

// App

// Local
import './Layout.less';

const propTypes = {
  children: PropTypes.any
};

const Layout = ({ children, ...rest }) => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{children}</main>
  </React.Fragment>
);

Layout.propTypes = propTypes;
export default Layout;
