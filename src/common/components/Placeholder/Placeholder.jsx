import React from "react";

import "./Placeholder.less";

const Placeholder = props => {
  return <div className="placeholder">{props.children}</div>;
};

export default Placeholder;
