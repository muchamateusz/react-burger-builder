import React from "react";
import PropTypes from "prop-types";
import Button from "../../../common-components/Button/Button";

import "./OrderSummary.less";
const OrderSummary = ({
  ingredients,
  purchaseContinueHandler,
  cancelPurchaseHandler,
  price,
  ...rest
}) => {
  const ingredientSummary = Object.keys(ingredients).map(ingKey => (
    <li key={`${ingKey}--${ingredients[ingKey]}`}>{`${ingKey}: ${
      ingredients[ingKey]
    }`}</li>
  ));
  console.log("cancelPurchaseHandler :", cancelPurchaseHandler);
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total Price: <strong>{price.toFixed(2)} PLN</strong></p>
      <p>Continue to order ?</p>
      <div className="order-summary__btns">
        <Button type="cancel" onClick={cancelPurchaseHandler}>
          CANCEL
        </Button>
        <Button type="continue" onClick={purchaseContinueHandler}>
          CONTINUE
        </Button>
      </div>
    </React.Fragment>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object
};

export default OrderSummary;
