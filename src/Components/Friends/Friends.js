import {Col, Container, Row, Button} from "react-bootstrap";
import React from "react";
import s from "./Friends.module.css"


const Friends = (props) => {
    let friendsJSX = props.state.map(friend =>
        <Container key={friend.id}>
            <Row>
                <Col>
                    <div className={s.photo}><img src={friend.photo} alt=""/></div>
                    <div><Button onClick={friend.followed ? () => {
                        props.follow(friend.id)
                    } : () => {
                        props.unFollow(friend.id)
                    }}>
                        {friend.followed ? "Unfollow" : "Follow"}
                    </Button></div>
                </Col>

                <Col>
                    <div>Name: {friend.name}</div>
                    <div>Status: {friend.status}</div>
                </Col>

                <Col>
                    <div>City: {friend.location.city}</div>
                    <div>Country: {friend.location.country}</div>
                </Col>

            </Row>


        </Container>
    )

    return (
        <div>
            {friendsJSX}
        </div>
    )
}


export default Friends;