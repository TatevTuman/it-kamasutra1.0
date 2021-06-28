import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import s from "./Friends.module.css";
import * as axios from "axios";

class FriendsClass extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
        });
    }
    render() {

        let friendsJSX = this.props.state.map(friend =>
            <Container key={friend.id}>
                <Row>
                    <Col>
                        {/*<div className={s.photo}><img src={friend.photo} alt=""/></div>*/}
                        <div className={s.photo}><img
                            src="https://inlnk.ru/r7peZ"
                            alt=""/></div>
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

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        let pagesJSX = pages.map((page) =>
            <span key={page.id}>
                <span onClick={()=>{this.onPageChanged(page)}} className={this.props.currentPage===page && s.selectedPage}>{page} </span>
            </span>
        )


        return (
            <div>

                {pagesJSX}
                {friendsJSX}
            </div>
        )
    }

}


export default FriendsClass;