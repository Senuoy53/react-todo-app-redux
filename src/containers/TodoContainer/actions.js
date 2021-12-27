import { actionTypes } from "./constants";

const setTasksData = (payload) => {
  return {
    type: actionTypes.SET_TASKS_DATA,
    payload,
  };
};

const setInputVal = (payload) => {
  return {
    type: actionTypes.SET_INPUT_VAL,
    payload,
  };
};

const deleteTask = (payload) => {
  return {
    type: actionTypes.DELETE_TASK,
    payload,
  };
};

const deleteTaskAll = () => {
  return {
    type: actionTypes.DELETE_TASK_ALL,
  };
};

export { setTasksData, setInputVal, deleteTask, deleteTaskAll };
