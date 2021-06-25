import React, {createRef} from "react";
import {Button} from "react-bootstrap";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/State";


const Message = (props) => {

    let messageJSX = props.state.map((message) =>
        <div key={message.id}>
            <div>{message.title}</div>
        </div>
    )

    let textMessage = createRef();


    let addMessageUI = () => {
        props.dispatch(addMessageActionCreator())

    }

    let onMessageChange = () => {
        let textValue = textMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(textValue))

    }

    return (
        <div>
            <div>{messageJSX}</div>
            <div><textarea ref={textMessage} onChange={onMessageChange} value={props.newMessageText}/></div>
            <div><Button onClick={addMessageUI}>Send</Button></div>


        </div>
    )
}

export default Message;