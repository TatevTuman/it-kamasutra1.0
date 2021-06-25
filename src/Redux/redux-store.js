import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";


let reducers = combineReducers({
    profilePage: reducerProfile,
    messagePage: reducerMessage,
})

let store = createStore(reducers);

export default store;