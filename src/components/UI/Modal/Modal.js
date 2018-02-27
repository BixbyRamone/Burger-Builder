// Referenced by BurgerBuilder.js
import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

import classes from './Modal.css';

const modal = (props) => (
	<Aux>
	<Backdrop 
	show={props.show}
	clicked={props.pHandler}
	/>
	<div 
	className={classes.Modal}
	style={{
		transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
		opacity: props.show ? '1' : '0'
	}}
	>
		{props.children}

	</div>
	</Aux>
)

export default modal;