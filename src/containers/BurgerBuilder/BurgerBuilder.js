import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';



const INGRDIENT_PRICES = {
		salad: .5,
		cheese: .75,
		meat: 1.25,
		bacon: 1
	};

class BurgerBuilder extends Component {

	// constructor(props) {
	// 		super(props);
	// 		this.state  = {...}
	// 	}

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},

		totalPrice: 2,
		purchaseable: false,
		purchasing: false
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

	purchaseHandler = ()=> {
		this.setState({purchasing: true});
	}

	cancelPurchaseHandler = ()=> {
		this.setState({purchasing: false});
	}

	purchaseContinueHandler = ()=> {
		alert('Continue!')
	}

	test = ()=> {
		console.log("Test");
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
					
				<Modal
				show={this.state.purchasing}
				pHandler={this.cancelPurchaseHandler}
				>
					<OrderSummary 
					ingredients={this.state.ingredients}
					cancel={this.cancelPurchaseHandler}
					continue={this.purchaseContinueHandler}
					total={this.state.totalPrice}
					/>
				</Modal>
				<Burger 
				ingredients={this.state.ingredients} 
				/>
				<BuildControls 
				ingredientAdded={this.addIngredientHandler}
				ingredientRemoved={this.removeIngredientHandler}
				disabled={diableInfo}
				price={this.state.totalPrice}
				purchaseable={this.state.purchaseable}
				ordered={this.purchaseHandler}
				/>
			</Aux>
			);
	}
}

export default BurgerBuilder;