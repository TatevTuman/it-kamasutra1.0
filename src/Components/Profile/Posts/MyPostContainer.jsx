
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/reducerProfile";
import MyPost from "./MyPost";




const MyPostContainer = (props) => {

    let addPostUl = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange=(textValue)=>{
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

export default MyPostContainer;