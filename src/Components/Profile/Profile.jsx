

import MyPost from "./Posts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css"
import {Col, Container, Row} from "react-bootstrap";


const Profile = (props) => {

    return (
        <div className={s.body}>
            <Container >
                <Row xs={3}>
                    <Col className={s.profileInfo}> <ProfileInfo/></Col>
                </Row>  <Row xs={3}>
                <Col className={s.profileInfo2}><MyPost state={props.state}
                                                        dispatch={props.dispatch}
                    /*addPost={props.addPost}*/
                    /* updateNewPostTest={props.updateNewPostTest}*/
                                                        newPostText={props.newPostText} /></Col>
            </Row>


            </Container>
        </div>
    )
}

export default Profile;