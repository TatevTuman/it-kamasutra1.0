
import {Button, Form} from "react-bootstrap";
import React, {createRef} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/reducerProfile";




const MyPost = (props) => {




    let postJSX = props.state.map((post) =>
        <div key={post.id}>
            <div>{post.title} </div>
            <div> Like: {post.like}</div>
            <div>_______________</div>
        </div>
    )

    let postText = createRef()

    let addPostUl = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange=()=>{
        let textValue = postText.current.value
        props.dispatch(updateNewPostTextActionCreator(textValue))
    }


    return (
        <div>
            <div>
                <h5>My posts</h5>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea"
                                      onChange={onPostChange}
                                      ref={postText}
                                      value={props.newPostText} />
                    </Form.Group>
                </Form>

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