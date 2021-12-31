import React from "react";
import "./index.css";
import AddComponent from "../../components/AddComponent";
import ValidationMessage from "../../components/ValidationMessage";
import Task from "../../components/Task";
import TodoFooter from "../../components/TodoFooter";
// import { Data } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setInputVal,
  setTasksData,
  deleteTask,
  deleteTaskAll,
} from "./actions";
import { toast } from "react-toastify";
import { useState } from "react";

const TodoContainer = () => {
  // const [tasksData, setTasksData] = useState([...Data]);
  // const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const todoData = useSelector((storekamel) => storekamel.todoState);

  // Confirm delete Message
  const [deleteMsgOn, setDeleteMsgOn] = useState(false);

  // Confirm clear all Message
  const [clearAllMsgOn, setClearAllMsgOn] = useState(false);

  // Button Type
  const [buttonType, setButtonType] = useState();

  // deleteIndex to deleted
  const [deleteIndex, setDeleteIndex] = useState();

  const handleChange = (val) => {
    // console.log(val);
    // setInputVal(val);
    dispatch(setInputVal(val));
  };
  const handleClick = (from, index) => {
    switch (from) {
      // Add Tasks
      case "add":
        if (!todoData.inputVal) return;
        // setTasksData([...tasksData, inputVal]);
        // setInputVal("");
        dispatch(setTasksData(todoData.inputVal));
        // Toastify Message
        toast.success("Task added successfully!!");

        // setNumPending(tasksData.length + 1);
        break;
      // Delete Task
      case "clear_task":
        // change delete Message to true
        setDeleteMsgOn(true);
        // take the index to deleted
        setDeleteIndex(index);
        setButtonType("clear_task");

        // Confirm Message
        // var deleteConfirm = window.confirm("Do you want to delete this task ?");
        // if (!deleteConfirm) return;

        // dispatch(deleteTask(index));
        // // Toastify Message
        // toast.success("Task deleted successfully!");

        break;
      // Delete All Tasks
      case "clear_all":
        //  change clear all message to true
        setClearAllMsgOn(true);
        setButtonType("clear_all");
        // Confirm Message
        // var deleteConfirm = window.confirm("Do you want to delete all tasks");
        // if (!deleteConfirm) return;

        // dispatch(deleteTaskAll());
        // toast.success("All tasks are deleted successfully!");

        break;
      default:
        break;
    }
  };

  const confirmClick = () => {
    switch (buttonType) {
      case "clear_all":
        setClearAllMsgOn(false);
        dispatch(deleteTaskAll());
        toast.success("All tasks are deleted successfully!");
        break;
      case "clear_task":
        // if user clicks ok button
        setDeleteMsgOn(false);
        dispatch(deleteTask(deleteIndex));
        // Toastify Message
        toast.success("Task deleted successfully!");
        break;
      default:
        break;
    }
  };

  const cancelClick = () => {
    switch (buttonType) {
      case "clear_all":
        setClearAllMsgOn(false);
        break;
      case "clear_task":
        // if user clicks cancel button
        setDeleteMsgOn(false);
        break;
      default:
        break;
    }
  };

  return (
    <div id="TodoContainer">
      <h1>Todo List App</h1>
      <AddComponent
        placeholder={"Add your new todo"}
        onChange={handleChange}
        value={todoData.inputVal}
        onClick={() => handleClick("add")}
      />
      <ul className="Task">
        {todoData.tasksData.map((item, index) => (
          <Task
            key={index}
            texte={item}
            onClick={() => handleClick("clear_task", index)}
          />
        ))}
      </ul>
      <TodoFooter
        NumPending={todoData.tasksData.length}
        onClick={() => handleClick("clear_all")}
      />
      {/* Validation Message */}
      <ValidationMessage
        style={{ display: deleteMsgOn ? "block" : "none" }}
        texte="Do you want to delete this task ?"
        confirmClick={confirmClick}
        cancelClick={cancelClick}
      />
      <ValidationMessage
        style={{ display: clearAllMsgOn ? "block" : "none" }}
        texte="Do you want to delete all tasks ?"
        confirmClick={confirmClick}
        cancelClick={cancelClick}
      />
    </div>
  );
};

export default TodoContainer;
