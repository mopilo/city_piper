import {combineReducers} from "redux";
import NavReducer from "./navigationReducer";
export default combineReducers({
    nav : NavReducer
})