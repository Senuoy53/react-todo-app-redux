import React from "react";
import "./index.css";

const CustomInput = ({ placeholder, onChange, ...rest }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  );
};

export default CustomInput;
