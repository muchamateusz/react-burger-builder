import React from "react";
import PropTypes from "prop-types";

import "./BuildControlsItem.less";

const BuildControlsItem = ({ label, added, removed, disabled, ...rest }) => {
  return (
    <div className="build-controls-item">
      <div className="build-controls-item__label">{label.toUpperCase()}</div>
      <button
        className="build-controls-item__btn--less"
        onClick={removed}
        disabled={disabled}
      >
        Less
      </button>
      <button className="build-controls-item__btn--more" onClick={added}>
        More
      </button>
    </div>
  );
};

BuildControlsItem.propTypes = {
  label: PropTypes.string
};
export default BuildControlsItem;
