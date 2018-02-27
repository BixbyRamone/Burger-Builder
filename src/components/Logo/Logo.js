// Referenced by Toolbar
// Referenced by SideDrawer

import React from 'react';

import classes from './Logo.css';
import image from '../../assets/burger-logo.png';

const logo = (props) => (

	<div className={classes.Logo} style={{height: props.height}}>
		<img src={image} alt="My Burger Logo"/>
	</div>

	);

export default logo;