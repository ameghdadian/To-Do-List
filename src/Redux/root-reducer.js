import { combineReducers } from "redux";

import { tasksReducer } from "../Redux/Tasks/tasks.reducers";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
