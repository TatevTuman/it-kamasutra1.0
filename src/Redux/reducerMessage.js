import types from "./actions";

let initialState = {
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

const reducerMessagePage = (state = initialState, action) => {
 /*   let stateCopy = {
        ...state,
        MessageData: [...state.MessageData]
    }*/

    switch (action.type) {
        case types.ADD_MESSAGE:
/*            let newMessage = {
                id: "4",
                title: stateCopy.newMessageText,
            }
            stateCopy.MessageData.push(newMessage)
            stateCopy.newMessageText = "";

            return stateCopy;*/
            return {
                ...state,
                newMessageText: "",
                MessageData:[...state.MessageData, {id:5,title:state.newMessageText }]
            }

        case types.UPDATE_NEW_MESSAGE_TEXT:
      /*      stateCopy.newMessageText = action.textValue;
            return stateCopy;*/
            return {
                ...state,
                newMessageText: action.textValue,
            }

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