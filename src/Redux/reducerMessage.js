import types from "./actions";


const reducerMessagePage = (state, action) => {

    if (action.type === types.ADD_MESSAGE) {
        let newMessage = {
            id: "4",
            title: state.newMessageText,
        }
        state.MessageData.push(newMessage)
        state.newMessageText = "";

    } else if (action.type === types.UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.textValue;

    }


    return state;
}


export default reducerMessagePage;