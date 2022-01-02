import { combineReducers} from "redux";
import taskReducer from "./task"; //taskReducer is called from file task
import cartReducer from "./cart";

export default combineReducers({  //this is to make two reducers work togethers
    task:taskReducer,
    cart:cartReducer
})