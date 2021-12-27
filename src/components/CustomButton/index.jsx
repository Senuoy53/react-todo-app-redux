import React from "react";
import "./index.css";

// Bootstrap
import { Button } from "react-bootstrap";

const CustomButton = ({ children, className, onClick }) => {
  return (
    <Button onClick={onClick} className={className}>
      {children}
    </Button>
    // <Button onClick={onClick}>{children}</Button>
  );
};

export default CustomButton;
