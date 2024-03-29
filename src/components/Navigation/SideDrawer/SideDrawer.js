import React from 'react'

import Logo from '../../Logo/Logo'

import NavigationItems from '../Toolbar/NavigationItems/NavigationItems'
import classes from './sideDrawer.module.css'
import Aux from "../../../containers/hoc/auxillary";
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    //...

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}><Logo/></div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    )
}

export default sideDrawer;
