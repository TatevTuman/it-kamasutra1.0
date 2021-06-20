import {Button} from "react-bootstrap";
import React, {createRef} from "react";


const MyPost = (props) => {

    let postJSX = props.state.map((post) =>
        <div key={post.id}>
            <div>{post.title} </div>
            <div> Like: {post.like}</div>
        </div>
    )

    let postText = createRef()

    let addPostUl = () => {
        let text = postText.current.value
        props.addPost(text)
    }
    let ttt=()=>{
        props.addPost.title=postText.current.value
    }

    console.log(props.addPost.title)

    return (
        <div>
            <div>
                <div><textarea onChange={ttt}  ref={postText} value={props.addPost.title}/></div>
                <Button
                    variant="warning"
                    onClick={addPostUl}
                >Add post</Button>
            </div>
            <div>
                {postJSX}
            </div>
        </div>
    )
}

export default MyPost;
