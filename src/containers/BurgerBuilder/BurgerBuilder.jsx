import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../common-components/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 1.5,
  meat: 15,
  cheese: 5.5,
  bacon: 8.3,
  "bread-middle": 1,
  "bread-bottom": 1,
  "bread-top": 1.5
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      "bread-middle": 0,
      cheese: 0,
      bacon: 0
    },
    purchasable: false,
    totalPrice: 0,
    showModal: false
  };

  componentDidMount() {
    if (!this.state.totalPrice) {
      const ingKeys = Object.keys(this.state.ingredients);
      let newPrice =
        INGREDIENT_PRICES["bread-top"] + INGREDIENT_PRICES["bread-bottom"];
      ingKeys.forEach(element => {
        if (this.state.ingredients[element] > 0) {
          newPrice +=
            INGREDIENT_PRICES[element] * this.state.ingredients[element];
        }
      });
      this.setState({ totalPrice: newPrice });
    }
  }

  updatePurchaseState() {
    this.setState(prevState => {
      const sum = Object.values(prevState.ingredients).reduce(
        (sum, el) => sum + el
      );
      return { purchasable: sum > 0 };
    });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState();
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount > 0 ? oldCount - 1 : oldCount;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceRemoval = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice > 0 ? oldPrice - priceRemoval : oldPrice;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState();
  };

  updateModalState = event => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  cancelPurchaseHandler = () => {
    this.updateModalState();
  };

  purchaseContinueHandler = () => {
    alert("Pay for your order!");
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <BuildControls
          purchasable={this.state.purchasable}
          controls={Object.keys(this.state.ingredients)}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          handleOrder={this.updateModalState}
          price={this.state.totalPrice}
        />
        <Burger ingredients={this.state.ingredients} />
        <Modal
          showModal={this.state.showModal}
          manageModalState={this.updateModalState}
        >
          <OrderSummary
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            cancelPurchaseHandler={this.cancelPurchaseHandler}
            purchaseContinueHandler={this.purchaseContinueHandler}
          />
        </Modal>
      </React.Fragment>
    );
  }
}
