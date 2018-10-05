// LIBS
import React from "react";
import PropTypes from "prop-types";

// APP
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

// MODULE
import "./Burger.less";

const Burger = ({ ingredients, ...rest }) => {
  // transform ingredients object into an array
  const transformedIngredients = Object.keys(ingredients)
    .map(ingKey =>
      [...Array(ingredients[ingKey])].map((_, index) => (
        <BurgerIngredient key={ingKey + index} type={ingKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);
  return (
    <div className="Burger" {...rest}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length > 0 ? (
        transformedIngredients
      ) : (
        <p>Please start adding ingredients</p>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object
};

export default Burger;
