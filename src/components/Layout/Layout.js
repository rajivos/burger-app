import React from "react";
import Aux from "../../hoc/auxillary";
import classes from "./Layout.module.css";

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => (
  <Aux>
    <Toolbar/>
    <SideDrawer/>
    <div>Toobar Side drawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
