import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/reducerProfile";
import MyPost from "./MyPost";
import {connect} from "react-redux";


/*
const MyPostContainer = (props) => {

    let addPostUl = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (textValue) => {
        props.dispatch(updateNewPostTextActionCreator(textValue))
    }

    return (
        <div>
            <MyPost addPostUl={addPostUl}
                    onPostChange={onPostChange}
                    state={props.state}
                    newPostText={props.newPostText}
            />
        </div>
    )
}

export default MyPostContainer;*/


const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        MyPostData: state.profilePage.MyPostData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        addPostUl: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (textValue) => {
            dispatch(updateNewPostTextActionCreator(textValue))
        }

    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;