// LIBS
import React from "react";
import PropTypes from "prop-types";

// APP

//MODULE
import "./BurgerIngredient.less";

const BurgerIngredient = ({ type, ...rest }) => (
  <div className={`burger-ingredient__${type}`}>
    {type === "bread-top" ? (
      <React.Fragment>
        <div className="burger-ingredient__seeds--1" />
        <div className="burger-ingredient__seeds--2" />
      </React.Fragment>
    ) : (
      ""
    )}
  </div>
);

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
