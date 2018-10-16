// LIBS
import React from "react";
import PropTypes from "prop-types";

// APP
import Button from "../../../common/components/Button/Button";

// MODULE
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
  return (
    <div className="order-summary">
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Total Price: <strong>{price.toFixed(2)} PLN</strong>
      </p>
      <p>Continue to order ?</p>
      <div className="order-summary__btns">
        <Button type="cancel" onClick={cancelPurchaseHandler}>
          CANCEL
        </Button>
        <Button type="continue" onClick={purchaseContinueHandler}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object,
  purchaseContinueHandler: PropTypes.func,
  cancelPurchaseHandler: PropTypes.func
};

export default OrderSummary;
