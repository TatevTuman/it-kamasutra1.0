
import React from "react";

import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/reducerMessage";
import Message from "./Message";


const MessageContainer = (props) => {


    let addMessageUI = () => {
        props.dispatch(addMessageActionCreator())

    }

    let onMessageChange = (textValue) => {
        props.dispatch(updateNewMessageTextActionCreator(textValue))

    }

    return (
        <div>
            <Message addMessageUI={addMessageUI}
                     onMessageChange={onMessageChange}
                     newMessageText={props.newMessageText}
                     state={props.state}
            />
        </div>
    )
}

export default MessageContainer;