import React from "react";

import Burger from "../Burger/Burger";
import Button from "../../common/components/Button/Button";

import "./CheckoutSumary.less";

const CheckoutSummary = props => {
  return (
    <div className="checkout-summary">
      <h1>We hope it tastes great!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button type="cancel" onClick={() => props.checkoutCancelled()}>
        CANCEL
      </Button>
      <Button type="continue" onClick={() => props.checkoutContinued()}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
