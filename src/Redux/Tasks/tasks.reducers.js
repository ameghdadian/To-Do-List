import taskTypes from "./tasks.types";

import { addToTasks, removeFromTasks, editTask } from "./tasks.utils";

const initialState = {
  activeTasks: [],
  doneTasks: [],
  lastTaskId: undefined,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskTypes.ADD_TASK:
      return {
        ...state,
        activeTasks: addToTasks(state.activeTasks, action.payload),
        lastTaskId: state.lastTaskId === undefined ? 0 : state.lastTaskId + 1,
      };
    case taskTypes.DONE_TASK:
      return {
        ...state,
        doneTasks: addToTasks(state.doneTasks, action.payload),
        activeTasks: removeFromTasks(state.activeTasks, action.payload),
      };
    case taskTypes.EDIT_TASK:
      return {
        ...state,
        activeTasks: editTask(state.activeTasks, action.payload),
      };
    default:
      return state;
  }
};
