import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css"
import {Col, Container, Row} from "react-bootstrap";
import MyPostContainer from "./Posts/MyPostContainer";
import React from "react";


const Profile = (props) => {


    return (
        <div className={s.body}>
            <Container>
                <Row xs={3}>
                    <Col className={s.profileInfo}> <ProfileInfo oneUserInfo={props.oneUserInfo}/></Col>
                </Row>
                <Row xs={3}>
                    <Col className={s.profileInfo2}><MyPostContainer/></Col>
                </Row>



            </Container>
        </div>
    )
}

export default Profile;