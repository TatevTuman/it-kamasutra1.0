import types from "./actions";

let initialState={
    CompanionData: [
        {id: "1", name: "Bob"},
        {id: "2", name: "Masha"},
        {id: "3", name: "Niko"},

    ],
    MessageData: [
        {id: "1", title: "Bob message"},
        {id: "2", title: "Masha message"},
        {id: "3", title: "Niko message"},

    ],
    newMessageText: "Your message . . .",
}

const reducerMessagePage = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
            let newMessage = {
                id: "4",
                title: state.newMessageText,
            }
            state.MessageData.push(newMessage)
            state.newMessageText = "";
            return state;
        case types.UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.textValue;
            return state;

        default:
            return state;

    }


}


export default reducerMessagePage;

export const addMessageActionCreator = () => {
    return {type: types.ADD_MESSAGE}
}
export const updateNewMessageTextActionCreator = (textValue) => {
    return {type: types.UPDATE_NEW_MESSAGE_TEXT, textValue}
}