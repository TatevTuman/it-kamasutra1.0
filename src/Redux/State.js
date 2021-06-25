import types from "./actions";
import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";


let store = {
    _state: {
        profilePage: {
            MyPostData: [
                {title: "Post1", like: "15", id: "1"},
                {title: "Post2", like: "20", id: "2"},
            ],
            newPostText: "Your post . . .",
        },

        messagePage: {
            CompanionData: [
                {id: "1", name: "Bob"},
                {id: "2", name: "Masha"},
                {id: "3", name: "Niko"},

            ],
            MessageData: [
                {id: "1", title: "Bob message"},
                {id: "2", title: "Masha message"},
                {id: "3", title: "Niko message"},

            ],
            newMessageText: "Your message . . .",
        },

    },

    getState() {
        return this._state;
    },

    /*    addPost() {
            let newPost = {
                title: this._state.newPostText,
                like: "0",
                id: "3"
            }
            this._state.MyPostData.push(newPost)
            this._state.newPostText = "";
            this._renderEntireTree(this._state);
        },*/
    /*    updateNewPostTest(textAreaValue) {
            this._state.newPostText = textAreaValue;
            this._renderEntireTree(this._state);
        },*/

    /*    addMassage() {
            let newMassage = {
                id: "4",
                title: this._state.newMassageText,
            }
            this._state.MessageData.push(newMassage)
            this._state.newMassageText = "";
            this._renderEntireTree(this._state)
        },*/
    /*    updateNewMassageTest(massageText) {
            this._state.newMassageText = massageText;
            this._renderEntireTree(this._state);
        },*/

    dispatch(action) {

        this._state.profilePage = reducerProfile(this._state.profilePage, action)
        this._state.messagePage = reducerMessage(this._state.messagePage, action)
        this._renderEntireTree(this._state);

        /*if (action.type=== types.ADD_POST){
                let newPost = {
                    title: this._state.newPostText,
                    like: "0",
                    id: "3"
                }
                this._state.MyPostData.push(newPost)
                this._state.newPostText = "";
                this._renderEntireTree(this._state);
        }else if(action.type=== types.UPDATE_NEW_POST_TEXT ){
            this._state.newPostText = action.textValue;
            this._renderEntireTree(this._state);
        }else if(action.type=== types.ADD_MESSAGE){
            let newMessage = {
                id: "4",
                title: this._state.newMessageText,
            }
            this._state.MessageData.push(newMessage)
            this._state.newMessageText = "";
            this._renderEntireTree(this._state)
        }else if(action.type===types.UPDATE_NEW_MESSAGE_TEXT){
            this._state.newMessageText = action.textValue;
            this._renderEntireTree(this._state);
        }*/
    },


    _renderEntireTree() {
        console.log("I am renderEntireTree and I work ")
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    }

}

/*export const addPostActionCreator = () => {
    return {type: types.ADD_POST}
}
export const updateNewPostTextActionCreator = (textValue) => {
    return {type: types.UPDATE_NEW_POST_TEXT, textValue}
}
export const addMessageActionCreator = () => {
    return {type: types.ADD_MESSAGE}
}
export const updateNewMessageTextActionCreator = (textValue) => {
    return {type: types.UPDATE_NEW_MESSAGE_TEXT, textValue}
}*/

