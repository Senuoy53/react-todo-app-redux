import React from "react";
import CustomButton from "../CustomButton";
import "./index.css";
import { btnDefault } from "../../utils/constants";

const TodoFooter = ({ NumPending, onClick }) => {
  return (
    <div className="TodoFooter">
      <span>
        You have <span id="NumPending">{NumPending}</span> pending tasks
      </span>
      {/* Conditional rendering */}
      {!!NumPending && (
        <CustomButton onClick={onClick}>{btnDefault.CLEAR_ALL}</CustomButton>
      )}
    </div>
  );
};

export default TodoFooter;
