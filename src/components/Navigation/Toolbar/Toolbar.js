import React from 'react'

import Logo from '../../Logo/Logo'
import classes from './Toolbar.module.css'
import NavigationItems from './NavigationItems/NavigationItems'
import DrawerToggler from '../SideDrawer/DrawerToggle/DrawerToggle'
const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggler clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}><Logo/></div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default Toolbar