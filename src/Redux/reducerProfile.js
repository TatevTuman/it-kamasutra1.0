import types from "./actions";

let initialState={
    MyPostData: [
        {title: "Post1", like: "15", id: "1"},
        {title: "Post2", like: "20", id: "2"},
    ],
    newPostText: "Your post . . .",
}


const reducerProfile = (state=initialState, action) => {

    switch (action.type) {
        case types.ADD_POST:
            let newPost = {
                title: state.newPostText,
                like: "0",
                id: "3"
            }
            state.MyPostData.push(newPost)
            state.newPostText = "";
            return state;

        case types.UPDATE_NEW_POST_TEXT:
            state.newPostText = action.textValue;
            return state;

        default:
            return state;


    }


}

export default reducerProfile;

export const addPostActionCreator = () => {
    return {type: types.ADD_POST}
}
export const updateNewPostTextActionCreator = (textValue) => {
    return {type: types.UPDATE_NEW_POST_TEXT, textValue}
}