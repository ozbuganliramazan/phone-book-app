import { createStore, combineReducers} from "redux";
import numberReducer from "./reducers/numberReducer";
import categoriesReducer from "./reducers/categoriesReducer";

const rootReducer=combineReducers({
numberState:numberReducer,
categoriesState:categoriesReducer
})

const store=createStore(rootReducer)


export default store