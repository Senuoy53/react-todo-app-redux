import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";

const ValidationMessage = ({ texte, name, onClick }) => {
  return (
    /* Validation Message */
    <div className="overlay" id="dialog-container">
      <div className="popup">
        <p>{texte}</p>
        <div className="text-right">
          <Button
            className="dialog-btn btn-primary"
            name={name}
            onClick={onClick}
            id="confirm"
          >
            Ok
          </Button>

          <Button
            className="dialog-btn btn-cancel"
            name={name}
            onClick={onClick}
            id="cancel"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ValidationMessage;
