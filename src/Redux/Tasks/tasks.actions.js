import taskTypes from "./tasks.types";

export const addTask = (taskDetails) => ({
  type: taskTypes.ADD_TASK,
  payload: taskDetails,
});

export const doneTask = (taskDetails) => ({
  type: taskTypes.DONE_TASK,
  payload: taskDetails,
});

export const editTask = (taskDetails) => ({
  type: taskTypes.EDIT_TASK,
  payload: taskDetails,
});

export const removeTask = (taskDetails) => ({
  type: taskTypes.REMOVE_TASK,
  payload: taskDetails,
});
