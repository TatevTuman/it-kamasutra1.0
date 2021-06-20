import {renderEntireTree} from "../render";

const state = {
    MyPostData: [
        {title: "Post1", like: "15", id: "1"},
        {title: "Post2", like: "20", id: "2"},

    ],


    CompanionData: [
        {id: "1", name: "Bob"},
        {id: "2", name: "Masha"},
        {id: "3", name: "Niko"},

    ],
    MessageData: [
        {id: "1", title: "Bob message"},
        {id: "2", title: "Masha message"},
        {id: "3", title: "Niko message"},

    ]
}




export let addPost=(postText)=>{

    let newPost= {
        title: postText,
        like: "0",
        id: "3"
    }

    state.MyPostData.push(newPost)
    renderEntireTree(state);
}




export default state;
