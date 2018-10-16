// LIBS
import React from "react";
import PropTypes from "prop-types";

// APP
import BuildControlsItem from "./BuildControlsItem/BuildControlsItem";
import Button from "../../../common/components/Button/Button";

// MODULE
import "./BuildControls.less";

const BuildControls = ({
  disabled,
  purchasable,
  controls,
  price,
  handleOrder,
  ingredientAdded,
  ingredientRemoved,
  ...rest
}) => (
  <div className="build-controls">
    <p>
      Total price: <strong>{price.toFixed(2)}</strong> PLN
    </p>
    {controls.map((ing, index) => (
      <BuildControlsItem
        key={ing + index}
        label={ing}
        added={() => ingredientAdded(ing)}
        removed={() => ingredientRemoved(ing)}
        disabled={disabled[ing]}
      />
    ))}
    <Button disabled={!purchasable} type="order" onClick={handleOrder}>
      ORDER NOW
    </Button>
  </div>
);

BuildControls.propTypes = {
  disabled: PropTypes.object,
  purchasable: PropTypes.bool,
  controls: PropTypes.array,
  price: PropTypes.number,
  handleOrder: PropTypes.func,
  ingredientAdded: PropTypes.func,
  ingredientRemoved: PropTypes.func
};

export default BuildControls;
