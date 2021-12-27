import React from "react";
import "./index.css";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../CustomButton";
// import { btnDefault } from "../../utils/constants";
const Task = ({ texte, onClick }) => {
  return (
    // <ul className="Task">
    //   {tasksData.map((item, index) => (
    <li>
      {texte}
      <span>
        <CustomButton onClick={onClick}>
          {/* {btnDefault.delete} */}
          {<FontAwesomeIcon icon={faTrash} />}
        </CustomButton>
      </span>
    </li>
    //   ))}

    //   {/* <li>Buy a new gaming laptop <span><FontAwesomeIcon icon={faTrash}/></span></li>
    //         <li>Complete a previous task <span><FontAwesomeIcon icon={faTrash}/></span></li>
    //         <li>Create a video for YouTube <span><FontAwesomeIcon icon={faTrash}/></span></li>
    //         <li>Create a new portfolio site <span><FontAwesomeIcon icon={faTrash}/></span></li> */}
    // // </ul>
  );
};

export default Task;
