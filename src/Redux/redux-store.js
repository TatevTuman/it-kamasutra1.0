import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";
import reducerFriends from "./reducerFriends";


let reducers = combineReducers({
    profilePage: reducerProfile,
    messagePage: reducerMessage,
    friendsPage:reducerFriends,
})

let store = createStore(reducers);

export default store;


