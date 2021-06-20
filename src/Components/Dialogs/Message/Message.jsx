import React, {createRef} from "react";
import {Button} from "react-bootstrap";


const Message = (props) => {

    let messageJSX = props.state.map((message) =>
        <div key={message.id}>
            <div>{message.title}</div>
        </div>
    )

    let textMessage = createRef();
    let addMessage = () => {
        let text = textMessage.current.value
        alert(text)
    }

    return (
        <div>
            <div>{messageJSX}</div>
            <div><textarea ref={textMessage}/></div>
            <div><Button onClick={addMessage}>Send</Button></div>


        </div>
    )
}

export default Message;