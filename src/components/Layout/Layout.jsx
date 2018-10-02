// Lib
import React from "react";
import PropTypes from "prop-types";

// App
import Aux from '../../hoc/Aux';

// Local
import './Layout.less';

const propTypes = {
  children: PropTypes.any
};

const Layout = ({ children, ...rest }) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{children}</main>
  </Aux>
);

Layout.propTypes = propTypes;
export default Layout;
