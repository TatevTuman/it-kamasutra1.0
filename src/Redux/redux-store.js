import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";
import reducerFriends from "./reducerFriends";
import reducerAuth from "./auth";


let reducers = combineReducers({
    profilePage: reducerProfile,
    messagePage: reducerMessage,
    friendsPage: reducerFriends,
    auth: reducerAuth,
})

let store = createStore(reducers);

export default store;


