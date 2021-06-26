import types from "./actions";

let initialState = {
    MyPostData: [
        {title: "Post1", like: "15", id: "1"},
        {title: "Post2", like: "20", id: "2"},
    ],
    newPostText: "Your post . . .",
}


const reducerProfile = (state = initialState, action) => {
/*    let stateCopy = {
        ...state,
        MyPostData: [...state.MyPostData]
    };*/

    switch (action.type) {
        case types.ADD_POST:
    /*        let newPost = {
                title: state.newPostText,
                like: "0",
                id: "3"
            }
            stateCopy.MyPostData = [...state.MyPostData]
            stateCopy.MyPostData.push(newPost)
            stateCopy.newPostText = "";
            return stateCopy;*/
            return {
                ...state,
                newPostText: "",
                MyPostData:[...state.MyPostData,{id:3, like:7, title: state.newPostText}]
            }


        case types.UPDATE_NEW_POST_TEXT:
         /*   stateCopy.newPostText = action.textValue;
            return stateCopy;*/
            return {
                ...state,
                newPostText: action.textValue
            }

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