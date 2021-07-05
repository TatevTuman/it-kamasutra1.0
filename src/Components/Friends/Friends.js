import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import s from "./Friends.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followFunc, unFollow} from "../../api/api";


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


                    <div>{friend.followed
                        ? <Button onClick={()=>{
                      /*      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${friend.id}`, {
                                withCredentials:true,
                                headers:{
                                    "API-KEY":"86b6d55f-9b69-4c48-827b-0eb35e80dd79"
                                }
                            })*/
                            const id=friend.id
                            followFunc(id)
                                .then(response=>{
                                    if(response.data.resultCode==0){
                                        props.unFollow(friend.id)
                                    }
                                });
                        }}>Unfollow</Button> :
                        <Button onClick={()=>{
                        /*    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${friend.id}`,{},{
                                withCredentials:true,
                                headers:{
                                    "API-KEY":"86b6d55f-9b69-4c48-827b-0eb35e80dd79"
                                }
                            })*/
                            const id=friend.id
                            unFollow(id)
                                .then(response=>{
                                    if(response.data.resultCode==0){
                                        props.followFriend(friend.id)
                                    }
                                })
                        }}

                        >Follow</Button>
                    }</div>
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


export default Friends;;