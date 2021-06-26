
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/reducerMessage";
import Message from "./Message";
import {connect} from "react-redux";


/*
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

export default MessageContainer;*/


const mapStateToProps = (state) => {
    return {
        state: state.messagePage.MessageData,
        newMessageText: state.messagePage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessageUI: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (textValue) => {
            dispatch(updateNewMessageTextActionCreator(textValue))
        }

    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;