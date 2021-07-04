import React from "react";
import {connect} from "react-redux";
import {setLoginData} from "../../Redux/auth";
import * as axios from "axios";
import NavBar from "./NavBar";


class NavBarContainerAPI extends React.Component {


    componentDidMount() {

        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data;
                this.props.setLoginData(id, email, login);
            }

        });

    }


    render() {
        return (
            <div>
                <NavBar {...this.props}/>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const NavBarContainer = connect(mapStateToProps, {setLoginData})(NavBarContainerAPI);

export default NavBarContainer;