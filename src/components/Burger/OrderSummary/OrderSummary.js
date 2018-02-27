// Referenced by BurgerBuilder.js

import React from 'react';

import classes from './OrderSummary.css';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
	const ingrSummary = Object.keys(props.ingredients)
						.map(igKeys=> {
							return <li
							key={igKeys}
							><span 
							style={{textTransform: 'capitalize'}}>{igKeys}							
							</span>: {props.ingredients[igKeys]} </li>
						})
	return (
			<Aux>
				<span
				className={classes.Span} 
				onClick={props.cancel}
				>X</span>
				<h3>Your Order</h3>
				<p> A delicious burger with the folowing ingredients: </p>
				<ul>
					{ingrSummary}
				</ul>

				<p><strong>Total Price: ${props.total}</strong></p>

				<p> Continue to Checkout? </p>
				<Button
				clicked={props.cancel}
				btnType={'Danger'}
				>CANCEL
				</Button>
				<Button
				clicked={props.continue}
				btnType={'Success'}
				>CONTINUE
				</Button>
			</Aux>
		)

};

export default orderSummary;