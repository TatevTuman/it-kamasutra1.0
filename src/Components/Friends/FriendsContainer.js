import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator
} from "../../Redux/reducerFriends";
import FriendsClass from "./FriendsClass";
import * as axios from "axios";


class FriendsContainerAPI extends React.Component{

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
        return(
            <div><FriendsClass onPageChanged={this.onPageChanged}
                               totalUsersCount={this.props.totalUsersCount}
                               pageSize={this.props.pageSize}
                               currentPage={this.props.currentPage}
                               state={this.props.state}

            /></div>
        )
    }


}


const mapStateToProps = (state) => {
    return {
        state: state.friendsPage.FriendsData,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unFollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUser: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage:(currentPage)=>{
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setTotalUsersCount:(totalUsersCount)=>{
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsContainerAPI);

export default FriendsContainer;

