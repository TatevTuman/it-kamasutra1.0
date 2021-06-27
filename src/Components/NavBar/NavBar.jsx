import {NavLink} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import logo from '../../Photo/logo.png';
import s from "./NavBar.module.css"


const NavBar = () => {
    return (

        <Container>
            <Row>
                <Col>
                    <img alt="logo" src={logo} width="160" height=""/>
                </Col>

                <Col className={s.menu}>
                    <span><NavLink to="/">Home</NavLink></span>
                    <span><NavLink to="/profile">Profile</NavLink></span>
                    <span><NavLink to="/dialogs">Message</NavLink></span>
                    <span><NavLink to="/music">Music</NavLink></span>
                    <span><NavLink to="/friends">Friends</NavLink></span>
                    <span><NavLink to="/news">News</NavLink></span>
                </Col>
            </Row>
        </Container>
    )
}

export default NavBar;





