import React from 'react'

import burgerLogo from '../../assets/images/logo.png'
import classes from './Logo.module.css'
const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Logo burger"/>
    </div>
)

export default Logo;