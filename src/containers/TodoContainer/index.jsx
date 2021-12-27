import React from "react";
import "./index.css";
import AddComponent from "../../components/AddComponent";
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

const TodoContainer = () => {
  // const [tasksData, setTasksData] = useState([...Data]);
  // const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const todoData = useSelector((storekamel) => storekamel.todoState);
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

        // setNumPending(tasksData.length + 1);
        break;
      // Delete Task
      case "clear_task":
        // console.log("jay men clear task");

        dispatch(deleteTask(index));

        break;
      // Delete All Tasks
      case "clear_all":
        // setTasksData([]);
        console.log("kayen clear all");
        dispatch(deleteTaskAll());
        // setNumPending(0);
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
    </div>
  );
};

export default TodoContainer;
