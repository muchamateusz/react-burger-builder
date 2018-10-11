import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Modal.less";

fontawesome.library.add(faTimes);

const Modal = ({ children, showModal, manageModalState, ...rest }) => (
  <React.Fragment>
    {showModal && <div onClick={manageModalState} className="dark-overlay" />}
    <div
      className={classNames("modal", { "modal--show": showModal })}
      style={{
        transform: showModal ? "translateY(0)" : "translateY(-100vh)",
        opacity: showModal ? "1" : "0"
      }}
    >
      <div className="modal__container">
        <span className="modal__container__close" onClick={manageModalState}>
          <FontAwesomeIcon icon="times" />
        </span>
        {children}
      </div>
    </div>
  </React.Fragment>
);

Modal.propTypes = {
  showModal: PropTypes.bool
};

export default Modal;
