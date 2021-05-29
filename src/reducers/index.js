import { combineReducers } from "redux";
import TaskListReducer from "./TaskLists";

const RootReducer = combineReducers({
  TaskListReducer,
});

export default RootReducer;
