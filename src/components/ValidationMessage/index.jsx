import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";

const ValidationMessage = ({ style, texte, confirmClick, cancelClick }) => {
  return (
    /* Validation Message */
    <div className="overlay" id="dialog-container" style={style}>
      <div className="popup">
        <p>{texte}</p>
        <div className="text-right">
          <Button
            className="dialog-btn btn-primary"
            id="confirm"
            onClick={confirmClick}
          >
            Ok
          </Button>

          <Button
            className="dialog-btn btn-cancel"
            id="cancel"
            onClick={cancelClick}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ValidationMessage;
