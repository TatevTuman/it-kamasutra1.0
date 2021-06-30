import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setOneUserInfoActionCreator} from "../../Redux/reducerProfile";
import {withRouter} from "react-router";



class ProfileContainer extends React.Component{



    componentDidMount() {
        let oneUserId=this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/`+oneUserId).then(response => {
            this.props.setOneUser(response.data);
        });

    }




    render() {
        return(<div>
            <Profile {...this.props} oneUserInfo={this.props.oneUserInfo}/>
        </div>)
    }
}

let mapStateToProps=(state)=>{
    return{
        oneUserInfo:state.profilePage.oneUserInfo

    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        setOneUser: (oneUInfo)=>{
           dispatch(setOneUserInfoActionCreator(oneUInfo));
        }
    }
}

let ProfileContainerWithRouter= withRouter(ProfileContainer);

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainerWithRouter);


