import { combineReducers } from "redux";
import tasksReducer from "./tasks";
const allReducers  = combineReducers({tasksReducer:tasksReducer});
export default allReducers;

