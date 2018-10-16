// LIBS
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// APP
import DarkOverlay from "../DarkOverlay/DarkOverlay";

// MODULE
import "./Modal.less";

fontawesome.library.add(faTimes);

class Modal extends Component {
  shouldComponentUpdate(nextProp, nextState) {
    return (
      nextProp.show !== this.props.show ||
      nextProp.children !== this.props.children
    );
  }
  componentWillUpdate() {
    console.log("[Modal] WillUpdate");
  }
  render() {
    return (
      <React.Fragment>
        <DarkOverlay
          show={this.props.showModal}
          clicked={this.props.manageModalState}
        />
        <div
          className={classNames("modal", {
            "modal--show": this.props.showModal
          })}
          style={{
            transform: this.props.showModal
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.showModal ? "1" : "0"
          }}
        >
          <div className="modal__container">
            <span
              className="modal__container__close"
              onClick={this.props.manageModalState}
            >
              <FontAwesomeIcon icon="times" />
            </span>
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  manageModalState: PropTypes.func
};

export default Modal;
