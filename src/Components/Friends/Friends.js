import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import s from "./Friends.module.css";
import {NavLink} from "react-router-dom";


const Friends = (props) => {


    let friendsJSX = props.state.map(friend =>
        <Container key={friend.id}>
            <Row>
                <Col>
                    <NavLink to={"/profile"+ friend.id}>
                        <div className={s.photo}> {friend.photos.small ? <img src={friend.photos.small}/> :
                            <img src="https://inlnk.ru/r7peZ" alt=""/>}
                        </div>
                    </NavLink>


                    <div><Button onClick={friend.followed ? () => {
                        this.props.follow(friend.id)
                    } : () => {
                        this.props.unFollow(friend.id)
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

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let pagesJSX = pages.map((page) =>
        <span key={page.id}>
                <span onClick={() => {
                    props.onPageChanged(page)
                }} className={props.currentPage === page && s.selectedPage}>{page} </span>
            </span>
    )


    return (
        <div>

            {pagesJSX}
            {friendsJSX}
        </div>
    )


}


export default Friends;