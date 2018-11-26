import React from "react";

import "./Order.less";

const Order = ({ order, ...rest }) => {
  console.log(order);
  const ingredients = [];

  for (let ingName in order.ingredients) {
    ingredients.push(ingName);
  }

  return (
    <div className="order">
      <p className="order__title">Ingredients: </p>
      <p className="order__ingredients">
        {ingredients.map((index, value) => `${index} (${value})`).join(", ")}
      </p>
      <p className="order__title">Price: </p>
      <strong>{order.price.toFixed(2)} PLN</strong>
    </div>
  );
};

export default Order;
