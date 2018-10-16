// LIBS
import React, { PureComponent } from "react";

// APP
import Modal from "../../common/components/Modal/Modal";
import { INGREDIENT_PRICES } from "../../common/enums/enums";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../Axios.config";
import Spinner from "../../common/components/Spinner/Spinner";
import withErrorHandler from "../../common/withErrorHandling";

// MODULE

class BurgerBuilder extends PureComponent {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      "bread-middle": 0,
      meat: 0,
      salad: 0
    },
    purchasable: false,
    totalPrice: 0,
    showModal: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get("https://react-burger-builder-2018.firebaseio.com/ingredients.json")
      .then(response => {
        if (response) {
          this.setState(prevState => {
            return {
              ingredients: { ...prevState.ingredients, ...response.data }
            };
          });
        }
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
          this.updatePurchaseState();
        }
      })
      .catch(error => {
        this.setState({ error });
      });
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
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Mati Mucha",
        address: {
          street: "Lagowska 1",
          zipCode: "01-565",
          country: "Poland"
        },
        email: "mucha@gmail.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(resp => {
        this.setState({ loading: false, showModal: false });
      })
      .catch(err => {
        this.setState({ loading: false, showModal: false });
      });
  };

  render() {
    let orderSummary = <Spinner />;
    let burger = this.state.error ? <p>Something went wrong !</p> : <Spinner />;
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    if (!this.state.loading) {
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          cancelPurchaseHandler={this.cancelPurchaseHandler}
          purchaseContinueHandler={this.purchaseContinueHandler}
        />
      );
    }

    if (this.state.ingredients) {
      burger = (
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
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {burger}
        <Modal
          showModal={this.state.showModal}
          manageModalState={this.updateModalState}
        >
          {orderSummary}
        </Modal>
      </React.Fragment>
    );
  }
}
export default withErrorHandler(BurgerBuilder, axios);
