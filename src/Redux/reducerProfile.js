import types from "./actions";

const reducerProfile=(state,action)=>{

    if (action.type=== types.ADD_POST){
        let newPost = {
            title: state.newPostText,
            like: "0",
            id: "3"
        }
        state.MyPostData.push(newPost)
        state.newPostText = "";


    }else if(action.type=== types.UPDATE_NEW_POST_TEXT ) {
       state.newPostText = action.textValue;

    }

    return state;
}

export default reducerProfile;