import taskTypes from "./tasks.types";

import { addToTasks } from "./tasks.utils";

const initialState = {
  activeTasks: [],
  doneTasks: null,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskTypes.ADD_TASK:
      return {
        ...state,
        activeTasks: addToTasks(state.activeTasks, action.payload),
      };
    default:
      return state;
  }
};
