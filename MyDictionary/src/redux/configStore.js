import {createStore, combineReducers} from "redux";
import Dic from "./modules/Dic";

const rootReducer = combineReducers({Dic});

const store = createStore(rootReducer);

export default store;