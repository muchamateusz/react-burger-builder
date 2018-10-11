import React from "react";
import PropTypes from "prop-types";
import Button from "../../../../common-components/Button/Button";

import "./BuildControlsItem.less";

const BuildControlsItem = ({ label, added, removed, disabled, ...rest }) => {
  return (
    <div className="build-controls-item">
      <div className="build-controls-item__label">{label.toUpperCase()}</div>
      <div className="build-controls-item__btns">
        <Button onClick={removed} disabled={disabled}>
          Less
        </Button>
        <Button onClick={added}>More</Button>
      </div>
    </div>
  );
};

BuildControlsItem.propTypes = {
  label: PropTypes.string
};
export default BuildControlsItem;
