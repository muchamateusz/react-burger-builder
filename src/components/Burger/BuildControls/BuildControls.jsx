// LIBS
import React from "react";
import PropTypes from "prop-types";

// APP
import BuildControlsItem from "./BuildControlsItem/BuildControlsItem";

// MODULE
import "./BuildControls.less";

const BuildControls = ({
  disabled,
  controls,
  ingredientAdded,
  ingredientRemoved,
  ...rest
}) => (
  <div className="build-controls">
    {controls.map((ing, index) => (
      <BuildControlsItem
        key={ing + index}
        label={ing}
        added={() => ingredientAdded(ing)}
        removed={() => ingredientRemoved(ing)}
        disabled={disabled[ing]}
      />
    ))}
  </div>
);

BuildControls.propTypes = {
  defaultProp: PropTypes.string
};

export default BuildControls;
