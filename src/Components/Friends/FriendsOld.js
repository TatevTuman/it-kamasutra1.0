import {Col, Container, Row, Button} from "react-bootstrap";
import React from "react";
import s from "./Friends.module.css"
import * as axios from "axios";


const FriendsOld = (props) => {

    if (props.state.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUser(response.data.items);
        });
    }


    let friendsJSX = props.state.map(friend =>
        <Container key={friend.id}>
            <Row>
                <Col>
                    {/*<div className={s.photo}><img src={friend.photo} alt=""/></div>*/}
                    <div className={s.photo}><img src="https://inlnk.ru/r7peZ" alt=""/></div>
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
                    <div>Status: Hy,I am here</div>
                   {/* <div>Status: {friend.status}</div>*/}
                </Col>

                <Col>
                    {/*      <div>City: {friend.location.city}</div>*/}
                    {/*         <div>Country: {friend.location.country}</div>*/}
                    <div>City: NewCity</div>
                    <div>Country: NewCountry</div>
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


export default FriendsOld;