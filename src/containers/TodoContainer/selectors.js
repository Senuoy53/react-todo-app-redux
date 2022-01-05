import { createSelector } from "reselect";

const selectFromTodoStateDomain = (globalState) => globalState.todoState;

const makeSelectTasksData = () =>
  createSelector(selectFromTodoStateDomain, (todoState) => todoState.tasksData);

const makeSelectInputVal = () =>
  createSelector(selectFromTodoStateDomain, (todoState) => todoState.inputVal);

export { makeSelectTasksData, makeSelectInputVal };
