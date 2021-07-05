
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/reducerMessage";
import Message from "./Message";
import {connect} from "react-redux";

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