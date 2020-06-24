import taskTypes from "./tasks.types";

export const addTask = (taskDetails) => ({
  type: taskTypes.ADD_TASK,
  payload: taskDetails,
});
