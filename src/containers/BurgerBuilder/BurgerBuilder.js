import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGRDIENT_PRICES = {
		salad: .5,
		cheese: .75,
		meat: 1.3,
		bacon: 1
	};

class BurgerBuilder extends Component {

	// constructor(props) {
		// 	super(props);
		// 	this.state  = {...}
		// }

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},

		totalPrice: 4,
		purchaseable: false
	}

	updatePurchaseState (ingredients) {
		const sum = Object.keys(ingredients)
					.map(igKey => {
						return ingredients[igKey]
					})
					.reduce((sum, element)=> {
						return sum + element;
					}, 0);
		this.setState({purchaseable: sum > 0});
	}	

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGRDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		//
		const newPrice = oldPrice + priceAddition;

		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

		this.updatePurchaseState(updatedIngredients);
				console.log(this.state);

	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};


		updatedIngredients[type] = updatedCount;
		const priceSubtraction = INGRDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		//
		const newPrice = oldPrice - priceSubtraction;

		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

		this.updatePurchaseState(updatedIngredients);
				console.log(this.state);

	}

	render() {
		const diableInfo = {
			...this.state.ingredients
		};
		for (let key in diableInfo) {
			diableInfo[key] = diableInfo[key] <= 0;
		}
		return (
			<Aux>
				<Burger 
				ingredients={this.state.ingredients} 
				/>
				<BuildControls 
				ingredientAdded={this.addIngredientHandler}
				ingredientRemoved={this.removeIngredientHandler}
				disabled={diableInfo}
				price={this.state.totalPrice}
				purchaseable={this.state.purchaseable}
				/>
			</Aux>
			);
	}
}

export default BurgerBuilder;